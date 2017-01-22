// Utility.js
'use strict'
var PeriodicTable = require('./PeriodicTable.js');
class Utility {
	static stringToElementList(str) {
		var list = {};
		var matches = str.match(/(([A-Z]{1}[a-z]*)([0-9]*))/g);
		for (var i in matches) {
			var fragment = matches[i];
			var element = fragment.match(/([A-Z]{1}[a-z]*)/g);
			if(PeriodicTable.getElement(element) === null) {
				return null;
			}
			var quantity = fragment.match(/([0-9]+)/g) || 1;
			list[element] = parseInt(quantity) + (list[element] || 0);
		}
		return list;
	}
}

module.exports = Utility;