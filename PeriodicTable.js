// PeriodicTable.js

'use strict'
const elements = require('./data/elements.json');

class PeriodicTable {

	static getElement (el) {
		if (elements[el]) {
			return elements[el];
		} else {
			return null;
		}
	}

	static getAtomic (el) {
		if (elements[el]) {
			return elements[el];
		} else {
			return null;
		}
	}

	static getGroup (group) {
		if (elements[el]) {
			return elements[el];
		} else {
			return null;
		}
	}

	static getPeriod (period) {
		if (elements[el]) {
			return elements[el];
		} else {
			return null;
		}
	}

	static getType (type) {
		if (elements[el]) {
			return elements[el];
		} else {
			return null;
		}
	}

}

module.exports = PeriodicTable;