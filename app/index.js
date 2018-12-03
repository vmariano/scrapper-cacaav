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

function processCard(card) {
  const $card = cheerio.load(card);
  var installer = { name:'', phone:'',  adress:''};
  var $data = $card('.Tarjeta-dato');

  installer.name = $card('.Tarjeta-titulo').text();
  installer.adress = processData($data[0]);
  installer.phone = processData($data[1]);
  console.log(installer)
}

