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
		it('Initial mass is 0', ()=> {
			let c = new Compound();
			expect(c).to.have.property('mass', 0)
		})
	})
	describe('new Compound(element_list)', ()=> {
		const element_list = {
			"Li": 3,
			"Cl": 1
		}
		it('The new keyword works', ()=> {
			let c = new Compound(element_list);
			expect(c).to.not.be.null;
		})
		it('Correct initial mass', ()=> {
			let c = new Compound(element_list);
			expect(c).to.have.property('mass', 56.2730)
		})
		it('Elements are added to compound', ()=> {
			let c = new Compound(element_list);
			let length = Object.keys(c.elements).length
			expect(length).equals(2);
		})
	})
	describe('add()', ()=> {
		it('Element is added to compound', ()=> {
			let c = new Compound();
			var added = c.add("Li");
			expect(added).to.be.true;
		})
		it('Invalid element is not added', ()=> {
			let c = new Compound();
			var added = c.add("Aa");
			expect(added).to.be.false;
		})
		it('Correct element is added to compound', ()=> {
			let c = new Compound();
			c.add("Li");
			expect(c.elements["Li"]).to.exist;
		})
		it('Mass is updated', ()=> {
			let c = new Compound();
			c.add("Li");
			expect(c.mass).equals(6.941)
		})
		it('Multiple of same element', ()=> {
			let c = new Compound();
			c.add("Li", 2);
			expect(c.elements["Li"]).equals(2)
		})
	})
	describe('remove()', ()=> {
		it('Element is removed from compound', ()=> {
			let c = new Compound({"Li": 2});
			var removed = c.remove("Li");
			expect(removed).to.be.true;
		})
		it('Invalid element is not removed', ()=> {
			let c = new Compound({"Li": 2});
			var removed = c.remove("Aa");
			expect(removed).to.be.false;
		})
		it('Element at 0 is not removed', ()=> {
			let c = new Compound({"Li": 1});
			c.remove("Li");
			var removed = c.remove("Li");
			expect(removed).to.be.false;
		})
		it('Element removed from compound at 0', ()=> {
			let c = new Compound({"Li": 1});
			c.remove("Li");
			expect(c.elements["Li"]).to.not.exist;
		})
		it('Correct element is removed from compound', ()=> {
			let c = new Compound({"Li": 2});
			c.remove("Li");
			expect(c.elements["Li"]).equals(1);
		})
		it('Mass is updated', ()=> {
			let c = new Compound({"Li": 2});
			c.remove("Li");
			expect(c.mass).equals('6.941')
		})
	})
})