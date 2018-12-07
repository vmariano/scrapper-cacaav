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

function extractLocation(address) {
    var addressArray = address.split(',');
    return addressArray[addressArray.length-1].trim();
}

function processCard(card) {
  const $card = cheerio.load(card);
  var installer = { name:'', phone:'',  address:'', location:''};
  var $installerData = $card('.Tarjeta-dato');

  installer.name = $card('.Tarjeta-titulo').text();
  installer.address = processData($installerData[0]);
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

//TODO: add async/await
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