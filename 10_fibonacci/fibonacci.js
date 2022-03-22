const fibonacci = function(fib) {
    
    let fibNum = parseInt(fib);

    if (fibNum < 0) {
        return 'OOPS';
    } else {
        
        let arr = [];
        arr[0] = 1;
        arr[1] = 1;
    
        for (let i = 2; i < fibNum; i++) {
            arr[i] = arr[i-2] + arr[i-1];
        }
    
        return arr[fibNum - 1];
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
