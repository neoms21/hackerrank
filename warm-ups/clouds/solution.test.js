var solution = require('./solution');

var assert = require('assert');

describe('jumping on the cloud tests', () => {
    it('should return jumps', () => {
        assert.equal(solution([0, 0, 1, 0, 0, 1, 0]), 4);
        assert.equal(solution([0, 0, 0, 0, 1, 0]), 3);
    });
});
//7546
