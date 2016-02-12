// index.js
'use strict'
const elements = require('./data/elements.json');

class PeriodicTable {

	static getElement(el) {
		if (elements[el]) {
			return elements[el];
		} else {
			return null;
		}
	}

}

module.exports = PeriodicTable;
