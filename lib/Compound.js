// Compound.js
'use strict'

const elements = require('../data/elements.json');

class Compound {
	constructor (element_list) {
		this.mass = 0;
		this.elements = {};
		if(element_list){
			for (var element in element_list) {
				let quantity = element_list[element];
				this.add(element, quantity);
			}
		}
	}

	add (element, quantity) {
		quantity = quantity || 1;
		let element_data = elements[element];
		if (!element_data) {
			return false;
		} 
		if (this.elements[element]) {
			this.elements[element] += quantity;
		} else {
			this.elements[element] = quantity;
		}
		this.mass += (quantity * element_data.mass);
		return true;
	}

	remove (element, quantity) {
		quantity = quantity || 1
		let element_data = elements[element];
		if (!element_data || !this.elements[element]) {
			return false;
		} 
		let elementCount = this.elements[element];
		if (quantity >= elementCount) {
			delete this.elements[element];
			this.mass -= (elementCount * element_data.mass);
		} else {
			this.elements[element] -= quantity;
			this.mass -= (quantity * element_data.mass);
		}
		return true;
	}

	clear () {
		this.mass = 0;
		this.elements = {};
	}

	toHTML () {
		let html = '';
		for (var element in this.elements) {
			let quantity = this.elements[element]
			html += element;
			html += quantity <= 1 ? '' : '<sub>'+quantity+'</sub>';
		}
		return html;
	}
}

module.exports = Compound;