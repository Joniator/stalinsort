require('mocha')
const assert = require('assert');
const equals = require('array-equal')
const sort = require('./');

console.log(sort([15, "yes", 5, 11, 14, 12]));

describe('sort', function() {
  it('should work as I want it to work', function() {
    assert(equals(sort([10, 5, 11, 14, 12]), [10, 11, 14]));
    assert(equals(sort([15, 5, 11, 14, 12]), [15]));
    assert(equals(sort([10,11,12,"thirteen", 12, 11]), [10, 11, 12]));
    assert(sort("hackerman") === false);
    assert(sort(undefined) === false)
  })
});