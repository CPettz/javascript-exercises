const findTheOldest = function(peopleObject) {

    // Add age property to all peopleObjects
    peopleObject.forEach(person => person.age = person.yearOfDeath - person.yearOfBirth);

    // Extra steps required in case the person is still living
    let date = new Date().getFullYear();
    peopleObject.forEach(function(person) {
        if (isNaN(person.age) == true) {
            person.age = date - person.yearOfBirth;
        }
    });

    // Return the person object with the largest person.age property
    let result = peopleObject.reduce(function(prev, curr) {
        return prev.age < curr.age ? curr : prev;
    });

    return result;

};

// Do not edit below this line
module.exports = findTheOldest;
