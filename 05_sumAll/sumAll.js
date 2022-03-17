const sumAll = function(num1, num2) {

    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    } else if (typeof num1 !== typeof num2) {
        return 'ERROR';
    } else if (typeof num1 !== "number" || typeof num2 !== "number") {
        return 'ERROR';
    } else {
        // We're going to be using the Gauss consecutive numbers approach for this
        let range = Math.abs((num2 - num1)) + 1;
        return result = (range / 2) * (num1 + num2);
    }
};

// Do not edit below this line
module.exports = sumAll;
