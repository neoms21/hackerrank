const pairs = c => {
    let result = 0;

    let arrLength = c.length;
    let i = 0;
    while (i < arrLength - 1) {
        i += 2;
        if (c[i] === 0) result += 1;
        else {
            i -= 1;
            result += 1;
        }
    }

    return result;
};

module.exports = pairs;
