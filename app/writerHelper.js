const fs = require('fs');
const target = "tmp/installers.json";

function saveData(data) {
     if (!fs.existsSync(target)) {
        createFile(target, data);
     }
     else {
        appendFile(target, data);
    }
}

function createFile(target, data) {
    fs.writeFile(target, data, function (err) {
        if (err) throw err;
    });
}

function appendFile(target, data) {
    fs.appendFile(target, data, function (err) {
        if (err) throw err;
    });
}

module.exports = saveData;