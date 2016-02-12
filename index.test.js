// index.test.js

const expect = require('chai').expect;
const mendeleev = require('./index.js');

describe('getElement()', ()=> {
	it('Returns correct element', ()=> {
		var element = mendeleev.getElement("Li");
		expect(element).to.have.property('name', 'lithium');
	})
	it('Returns null for invalid element', ()=> {
		var element = mendeleev.getElement("Aa");
		expect(element).to.be.null;
	})
})