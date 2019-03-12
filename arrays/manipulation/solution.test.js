var manipulator = require('./solution');

var assert = require('assert');

describe('sock merchant tests', () => {
    it('should return pairs', () => {
        assert.equal(manipulator(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]]), 200);
        assert.equal(manipulator(10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]), 10);
    });
});
//7546
