'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.qcovidPOST = function qcovidPOST (req, res, next, body) {
  Default.qcovidPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
