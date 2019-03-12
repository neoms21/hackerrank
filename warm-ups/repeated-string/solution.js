const strings = (s, n) => {
    let result = 0;
    const inputLength = s.length;
    const countInInputString = s.match(/a/g) ? s.match(/a/g).length : 0;

    const dividend = Math.floor(n / inputLength);
    const rem = n % inputLength;

    result += dividend * countInInputString;

    const matchInSubstr = s.substr(0, rem).match(/a/g);
    const lenInRemainder = matchInSubstr ? matchInSubstr.length : 0;
    return result + lenInRemainder;
};

module.exports = strings;
