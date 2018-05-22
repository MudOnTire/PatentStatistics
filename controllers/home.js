const request = require('request');

const urlBase = 'http://192.168.20.38:8080/patentQuery';

exports.bagStatistics = function (req, res) {
    const collegeName = req.query.collegeName;
    const name = req.query.name;
    const query = { collegeName, name };
    const options = {
        url: `${urlBase}/findProfessorCountByName`,
        qs: query
    }
    request(options, function (err, response, body) {
        console.log(body);
        res.render('bag1', body);
    });

}

exports.storeStatistics = function (req, res) {

}