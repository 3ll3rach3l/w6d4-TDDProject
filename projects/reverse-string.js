function reverse (string) {
    try {
        let arr = string.split('').reverse().join('');
        return arr;
    } catch (err) {
        throw new TypeError;
    }


}




module.exports = reverse;
