const pairs = (n, ar) => {
    let result = 0;
    const uniqueItems = new Set(ar);

    uniqueItems.forEach(u => {
        const countForEachUniqueItem = ar.filter(a => a === u).length;

        result += Math.floor(countForEachUniqueItem / 2);
    });

    return result;
};

module.exports = pairs;
