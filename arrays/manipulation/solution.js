const pairs = (n, queries) => {
    let obj = {};

    queries.forEach(query => {
        const lowerBound = query[0];
        const upperBound = query[1];
        const toAdd = query[2];

        for (let index = lowerBound; index <= upperBound; index++) {
            obj[index] = obj[index] ? obj[index] + toAdd : toAdd;
        }
    });

    const values = Object.values(obj);
    return values.sort((a, b) => b - a)[0];
};

module.exports = pairs;
