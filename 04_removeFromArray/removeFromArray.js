const removeFromArray = function(arr, ...toRemove) {

    for(let i = 0; i < toRemove.length; i++) {
        if (arr.indexOf(toRemove[i]) === -1) {
            continue;
        } else {
            arr.splice(arr.indexOf(toRemove[i]), 1);
        }
    }

    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
