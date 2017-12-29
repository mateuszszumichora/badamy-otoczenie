var fs = require('fs');
var colors = require('colors');

fs.readdir('../badamy otoczenie', 'utf-8', function(err, data) {
    fs.writeFile('tekst.txt', data, function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
    });
});