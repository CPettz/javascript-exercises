const palindromes = function (string) {
    let original = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"").toLowerCase();
    let noPunctuationLower = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"").toLowerCase();
    let comparison = noPunctuationLower.split("").reverse().join("");
    
    if (original == comparison) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
