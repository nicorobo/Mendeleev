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

	static getAtomic (atomicNumber) {
		let results = filterElements(v => {
			return elements[v].number == atomicNumber
		});
		return results[0] || null;
	}

	static getGroup (group) {
		let results = filterElements(v => {
			return elements[v].group == group
		});
		if (results.length <= 0) {
			return null;
		}
		return results || null;
	}

	static getPeriod (period) {
		let results = filterElements(v => {
			return elements[v].period == period
		});
		if (results.length <= 0) {
			return null;
		}
		return results || null;
	}

	static getType (type) {
		let results = filterElements(v => {
			return elements[v].type == type
		});
		if (results.length <= 0) {
			return null;
		}
		return results || null;
	}
}

function filterElements(filter) {
	let results = Object.keys(elements).filter(filter).map(v => {
		return elements[v];
	})
	return results;
}
module.exports = PeriodicTable;