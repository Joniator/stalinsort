# Stalinsort [![NPM version](https://img.shields.io/npm/v/stalinsort.svg?style=flat)](https://www.npmjs.com/package/stalinsort)[![NPM monthly downloads](https://img.shields.io/npm/dm/stalinsort.svg?style=flat)](https://npmjs.org/package/stalinsort) [![NPM total downloads](https://img.shields.io/npm/dt/stalinsort.svg?style=flat)](https://npmjs.org/package/stalinsort)

> Returns the stalinsorted array.

Please consider following this project's author, [Jon Schlinkert](https://github.com/joniator), and consider starring the project to show your :heart: and support.

My [inspiration](https://new.reddit.com/r/ProgrammerHumor/comments/9s9kgn/nononsense_sorting_algorithm) comes from this great post about a new sorting algorithm with O(n) complexity, and I had to share it so everyone can use this for free, as Stalin wished us to share his great invention.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save stalinsort
```

## Usage

Works with strings or numbers.

```js
const sort = require('stalinsort');

console.log(sort([ 10, 5, 11, 14, 12 ])); //=> [ 10, 11, 14 ]
console.log(sort([ 99, 11, 1 ])); //=> [ 99 ]

console.log(sort("Hello")); //=> false
console.log(sort(undefined)); //=> false
```

## About

<details>
<summary><strong>Contributing</strong></summary>

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

</details>

<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

</details>