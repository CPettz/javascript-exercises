const getTheTitles = function(books) {
    
    let answer = [];

    for (let i = 0; i < books.length; i++) {
        answer.push(books[i].title);
    }

    return answer;

};

// Do not edit below this line
module.exports = getTheTitles;
