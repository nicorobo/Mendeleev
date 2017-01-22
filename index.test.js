// index.test.js

'use strict'
const expect = require('chai').expect;
const ptable = require('./index.js').PeriodicTable;
const Compound = require('./index.js').Compound;
const Utility = require('./index.js').Utility;

describe('PeriodicTable.js', ()=> {
	describe('getElement()', ()=> {
		it('Returns correct element', ()=> {
			var element = ptable.getElement("Li");
			expect(element).to.have.property('name', 'lithium');
		})

		it('Returns null for invalid element', ()=> {
			var element = ptable.getElement("Aa");
			expect(element).to.be.null;
		})
	})
	describe('getAtomic()', ()=> {
		it('Returns correct element', ()=> {
			var element = ptable.getAtomic(3);
			expect(element).to.have.property('name', 'lithium');
		})

		it('Returns null for invalid element', ()=> {
			var element = ptable.getAtomic(345);
			expect(element).to.be.null;
		})
	})

	describe('getGroup()', ()=> {
		it('Returns correct group', ()=> {
			var group = ptable.getGroup(2);
			expect(group.length).equals(6);
		})

		it('Returns null for invalid group', ()=> {
			var group = ptable.getGroup(55);
			expect(group).to.be.null;
		})
	})

	describe('getPeriod()', ()=> {
		it('Returns correct period', ()=> {
			var period = ptable.getPeriod(3);
			expect(period.length).equals(8);
		})

		it('Returns null for invalid period', ()=> {
			var period = ptable.getPeriod(96);
			expect(period).to.be.null;
		})
	})

	describe('getType()', ()=> {
		it('Returns correct type', ()=> {
			var type = ptable.getType("halogen");
			expect(type.length).equals(6);
		})

		it('Returns null for invalid type', ()=> {
			var type = ptable.getType("halatoot");
			expect(type).to.be.null;
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
			expect(c.getMass()).equals(0);
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
			expect(c.getMass()).equals(56.2730)
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
		it('Element is added to elementList', ()=> {
			let c = new Compound();
			c.add("Li");
			expect(c.elementsList.length).equals(1);
		})
		it('Mass is updated', ()=> {
			let c = new Compound();
			c.add("Li");
			expect(c.getMass()).equals(6.941)
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
		it('Element is removed from elementList', ()=> {
			let c = new Compound();
			c.add("Li");
			c.remove("Li");
			expect(c.elementsList.length).equals(0);
		})
		it('Mass is updated', ()=> {
			let c = new Compound({"Li": 2});
			c.remove("Li");
			expect(c.getMass()).equals(6.941)
		})
	})
	describe('clear()', ()=> {
		it('Resets mass', ()=> {
			let c = new Compound({"Li": 2});
			c.clear();
			expect(c.getMass()).equals(0);
		})
		it('Resets elements', ()=> {
			let c = new Compound({"Li": 2});
			c.clear();
			let length = Object.keys(c.elements).length
			expect(length).equals(0)
		})
	})
	describe('toHTML()', ()=> {
		it('Returns valid html for single element', ()=> {
			let c = new Compound({"Li": 2});
			let html = c.toHTML();
			expect(html).equals('Li<sub>2</sub>');
		})
		it('Return valid html for multiple elements', ()=> {
			let c = new Compound({"Li": 2, "Cl": 4});
			let html = c.toHTML();
			expect(html).equals('Li<sub>2</sub>Cl<sub>4</sub>');
		})
	})
})
describe('Utility.js', ()=> {
	describe('stringToElementList()', ()=> {
		it('Returns correct element list', ()=> {
			var elementList = Utility.stringToElementList("H2O");
			expect(elementList).to.deep.equal({'H': 2, 'O': 1});
		})

		it('Returns null for invalid string', ()=> {
			var elementList = Utility.stringToElementList("Hh2O");
			expect(elementList).to.be.null;
		})
	})

})