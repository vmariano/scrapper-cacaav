const fs = require('fs');
const target = "tmp/test.json";

function saveData(data) {
    fs.writeFile(target, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
}


module.exports = saveData;