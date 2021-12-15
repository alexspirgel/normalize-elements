# Normalize Elements
A utility function that returns an array of element references from a variety of argument types.

Valid argument types include:
* element reference
* css selector string
* query selectors (`document.querySelector`, `document.querySelectorAll`, or any node list)
* an array including any combination of the above

## Installation

### Using NPM:

```js
npm install @alexspirgel/normalize-elements
```

```js
const normalizeElements = require('@alexspirgel/normalize-elements');
```

## Usage

```js
let elements = normalizeElements(document.body); // element reference
let elements = normalizeElements('.example-selector'); // css selector string
let elements = normalizeElements(document.querySelectorAll('.another-selector')); // query selector (node list)
let elements = normalizeElements([ // an array including any combination of the above.
	document.body,
	'.example-selector',
	document.querySelectorAll('.another-selector')
]);
```