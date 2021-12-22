const isElement = require('@alexspirgel/is-element');

function normalizeElements(inputValue, elementsSet = new Set()) {
	if (Array.isArray(inputValue) || inputValue instanceof NodeList) {
		for (let value of inputValue) {
			normalizeElements(value, elementsSet);
		}
	}
	else if (typeof inputValue === 'string') {
		normalizeElements(document.querySelectorAll(inputValue), elementsSet);
	}
	else if (isElement(inputValue)) {
		elementsSet.add(inputValue);
	}
	const optionElements = Array.from(elementsSet);
	return optionElements;
}

module.exports = normalizeElements;