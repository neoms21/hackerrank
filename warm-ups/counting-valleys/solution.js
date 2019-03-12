const pairs = (n, s) => {
    const arr = s.split('');

    let valley = 0;
    let elevation = 0;
    let t = arr.length;

    for (let i = 0; i < t; i++) {
        const c = s[i];
        if (c == 'D') {
            if (elevation == 0) valley++;
            elevation--;
        } else elevation++;
    }

    return valley;
};

module.exports = pairs;
