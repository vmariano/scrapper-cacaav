const request = require('request');
const cheerio = require('cheerio');

// Test
const url = 'http://127.0.0.1:8080/';

//Target
// const url = 'http://www.cacaav.com.ar/matriculados/listado';

request(url, function(err, resp, html) {
        if (!err){
          const $ = cheerio.load(html);
          $('.Tarjeta').each(function (index, value) {
            processCard(value)
          });
      }
});

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
  console.log(installer)
}

