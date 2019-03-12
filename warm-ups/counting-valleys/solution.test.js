var valleys = require('./solution');

var assert = require('assert');

describe('counting valley tests', () => {
    it('should return depth', () => {
        assert.equal(valleys(10, 'UDDDUDUU'), 1);
        assert.equal(valleys(10, 'DDUUDDUDUUUD'), 2);
        assert.equal(valleys(10, 'DUDDDUUDUU'), 2);
    });
});
//7546
