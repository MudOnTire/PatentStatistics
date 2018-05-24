const request = require('request');
const moment = require('moment');

const urlBase = 'http://192.168.20.38:8080/patentQuery';

exports.bagStatistics = function (req, res) {
    const collegeName = req.query.college;
    const name = req.query.name;
    const query = { collegeName, name };
    const options = {
        url: `${urlBase}/findProfessorCountByName`,
        qs: query
    }
    request(options, function (err, response, body) {
        if (err) {

        } else {
            const result = JSON.parse(body).result.value;
            result.adMin = moment(result.adMin, 'YYYY.MM.DD').format('YYYY年MM月DD日');
            result.adMax = moment(result.adMin, 'YYYY.MM.DD').format('YYYY年MM月DD日');
            res.render('bag', { result: result });
        }
    });
}

exports.bagSummary = function (req, res) {
    const collegeName = req.query.college;
    const name = req.query.name;
    const query = { collegeName, name };
    const options = {
        url: `${urlBase}/findProfessorCountByName`,
        qs: query
    }
    request(options, function (err, response, body) {
        if (err) {

        } else {
            const result = JSON.parse(body).result.value;
            result.adMin = moment(result.adMin, 'YYYY.MM.DD').format('YYYY年MM月DD日');
            result.adMax = moment(result.adMin, 'YYYY.MM.DD').format('YYYY年MM月DD日');
            res.render('bagSummary', { result: result });
        }
    });
}

exports.storeStatistics = function (req, res) {

}