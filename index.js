// index.js

const elements = require('./data/elements.json');

function getElement(abbr) {
	if (elements[abbr]) {
		return elements[abbr];
	} else {
		return null;
	}
}

