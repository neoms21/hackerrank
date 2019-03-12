var pairs = require('./solution');

var assert = require('assert');

describe('sock merchant tests', () => {
    it('should return pairs', () => {
        assert.equal(pairs(9, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]), 4);
    });
});
//7546
