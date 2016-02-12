// index.test.js
'use strict'
const expect = require('chai').expect;
const ptable = require('./PeriodicTable.js');
const Compound = require('./Compound.js');

describe('PeriodicTable.js', ()=> {
	describe('getElement()', ()=> {
		it('Returns correct element', ()=> {
			console.log(ptable.getElement);
			var element = ptable.getElement("Li");
			expect(element).to.have.property('name', 'lithium');
		})

		it('Returns null for invalid element', ()=> {
			var element = ptable.getElement("Aa");
			expect(element).to.be.null;
		})
	})
})

describe('Compound.js', ()=> {
	describe('new Compound()', ()=> {
		it('The new keyword works', ()=> {
			let c = new Compound();
			expect(c).to.not.be.null;
		})
		it('Initial weight is 0', ()=> {
			let c = new Compound();
			expect(c).to.have.property('mass', 0)
		})
	})
	describe('add()', ()=> {
		it('Element is added to compound', ()=> {
			let c = new Compound();
			var added = c.add("Li");
			expect(added).to.be.true;
		})
		it('Correct element is added to compound', ()=> {
			let c = new Compound();
			c.add("Li");
			expect(c.elements["Li"]).to.exist;
		})
		it('Mass is updated', ()=> {
			let c = new Compound();
			c.add("Li");
			expect(c.mass).equals('6.941')
		})
		it('Multiple of same element', ()=> {
			let c = new Compound();
			c.add("Li");
			c.add("Li")
			expect(c.elements["Li"]).equals(2)
		})
	})
})