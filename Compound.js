// Compound.js
'use strict'

const elements = require('./data/elements.json');

class Compound {
	constructor (element_list) {
		this.element_list = {};
		if(element_list){
			for (var element in element_list) {
				let quantity = element_list[element];
				this.add(element, quantity);
			}
		}
		this.mass = 0;
	}

	add (element, quantity) {
		quantity = quantity || 1;
		let element_data = elements[element];
		if (!element_data) {
			return false;
		} 
		if (this.element_list[element]) {
			this.element_list[element] += quantity;
		} else {
			this.element_list[element] = quantity;
		}
		this.mass += (quantity * element_data.mass);
		return true;
	}

	remove (element, quantity) {
		quantity = quantity || 1
		return true
	}
}

module.exports = Compound;