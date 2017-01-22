// Compound.js
'use strict'

const elements = require('../data/elements.json');

class Compound {
	constructor (element_list) {
		this.elements = {};
		this.elementsList = [];
		if(element_list){
			for (var element in element_list) {
				let quantity = element_list[element];
				this.add(element, quantity);
			}
		}
	}

	add (element, quantity) {
		quantity = quantity || 1;
		if (!elements[element]) {
			return false;
		} 
		if (this.elements[element]) {
			this.elements[element] += quantity;
		} else {
			this.elements[element] = quantity;
			this.elementsList.push(element);
		}
		return true;
	}

	remove (element, quantity) {
		quantity = quantity || 1;
		if (!elements[element] || !this.elements[element]) {
			return false;
		} 
		let elementCount = this.elements[element];
		if (quantity >= elementCount) {
			delete this.elements[element];
			this.elementsList.splice(this.elementsList.indexOf(element), 1);
		} else {
			this.elements[element] -= quantity;
		}
		return true;
	}

	clear () {
		this.elements = {};
		this.elementsList = [];
	}

	getMass () {
		let mass = 0;
		// Okay okay, if I have time i'll find better names, this is getting nuts.
		for (var element in this.elements) {
			mass += this.elements[element] * elements[element].mass;
		}
		return mass;
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