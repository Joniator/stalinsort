const isArray = require('is-array');
const isNumber = require('is-number');

/**
 * @param {Array} arr
 * @returns {*}
 */
function sort(arr) {
    if (!isArray(arr))
        return false;

    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        const element = arr[i];

        if (!isNumber(element) || element <= max)
            arr.splice(i--, 1);
        else if (element > max)
            max = element;
    }
    return arr;
}

module.exports = sort;
