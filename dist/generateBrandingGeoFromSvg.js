'use strict';

var _uscoGeometryUtils = require('usco-geometry-utils');

var _getBrandingSvg = require('./getBrandingSvg');

var _getBrandingSvg2 = _interopRequireDefault(_getBrandingSvg);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var machineNames = ['ultimaker3', 'ultimaker3_extended'];
var shortNames = { 'ultimaker3': 'um3', 'ultimaker3_extended': 'um3Ext' };

machineNames.forEach(function (machineName) {
  var svg = (0, _getBrandingSvg2.default)(machineName);
  var geometry = (0, _uscoGeometryUtils.svgStringAsGeometry)(svg, { delaunay: true, scale: 100, randomization: 50, simplify: 0.05 });

  var output = 'exports.positions = ' + JSON.stringify(geometry.positions) + '\nexports.cells = ' + JSON.stringify(geometry.cells);

  var shortName = shortNames[machineName];
  _fs2.default.writeFileSync(_path2.default.resolve(__dirname, shortName + 'LogoGeo.js'), output);
});