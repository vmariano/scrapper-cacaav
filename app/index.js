const request = require('request');
const cheerio = require('cheerio');
const writer = require('./writerHelper.js');

// Test
const baseUrl = 'http://127.0.0.1:8080/';
const pageTotal = 270;

//Target
//const baseUrl = 'http://www.cacaav.com.ar/matriculados/listado';

function processData(data) {
    const $data = cheerio.load(data);
    return $data.text().trim();
}

function extractLocation(adress) {
    var adressArray = adress.split(',');
    return adressArray[adressArray.length-1].trim();
}

function processCard(card) {
  const $card = cheerio.load(card);
  var installer = { name:'', phone:'',  adress:'', location:''};
  var $installerData = $card('.Tarjeta-dato');

  installer.name = $card('.Tarjeta-titulo').text();
  installer.adress = processData($installerData[0]);
  installer.location = extractLocation(processData($installerData[0]));
  installer.phone = processData($installerData[1]);
  return installer
}

function requestTo(url) {
    request(url, function(err, resp, html) {
        if (!err){
            const $ = cheerio.load(html);
            var scrapedData = '';
            $('.Tarjeta').each(function (index, value) {
                scrapedData += JSON.stringify(processCard(value)) + ',\n';
            });
            //console.log(scrapedData);
            writer(scrapedData);
        }
    });
}

function scrapData() {
    var url = baseUrl;
    for (var i=1; i<pageTotal;i++) {
        if (i !== 1) {
            // Skip 1st.
            url = baseUrl +  '?page=' + i;
        }
        console.log('Processing:' + i +'of' + pageTotal);
        requestTo(url)
    }
}

scrapData();