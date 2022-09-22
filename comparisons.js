// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true
console.log("is numberTeachers less than numberStudents?", numberTeachers < numberStudents );

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
// this should log: false
console.log("is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);
// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
console.log("is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true 
console.log("is numberStudents greater than or equal to 20?", numberStudents >= 20);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log("is numberStudents greater than or equal to 21?", numberStudents >= 21);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log("is numberStudents less than or equal to 20?", numberStudents <= 20);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log("is numberStudents less than or equal to 21?", numberStudents <= 21);

// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: consol.log is what will give us the output.
//the input is a mathmaticol expression asking the question; is the intager 4 less than the intager 9. 

var books = 3;
console.log(4 < books);
// YOU DO: book is a variable that has the assigned intager value of 3.
// console.log will give us an output after evaluating ( is 4 less than the value assinged to the variable books{3}) 
// this in going to come back as ither true of false. in this case it would be false

var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO:we have two variables, friends and siblings. both have assinged values.
// its asking through the use of these variables if 6 is greater than 2
// console.log will give us the output True.


var attendees = 9;
var meals = 8;
console.log(attendees != meals);
// YOU DO: Explain. again we have two variables; attendees, and meals.
// this line is asking (if 9 isNot equel to 8 ) this would come back as True, 9 isNot equel to 8.


// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;


// YOU DO:
// Determine if the dog loves to play and loves treats
consol.log(lovesToPlay && lovesTreats);

// Determine if the dog loves to play and loves the dog park
consol.log(lovesToPlay && lovesDogPark );

// Determine if the dog loves to play or loves the dog park
consol.log(lovesToPlay || lovesDogPark );

// Determine if the dog loves to play and is a puppy
consol.log(lovesToPlay && age );
// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: it returend 1. for boolion 1 / 0 con equel true or false.
//i think for this problem the bool evaluated age as true, so it returned 1.
// i supose it could have also not known the answer so it added the two options (1 or 0) 
//as intagers (1 + 0 = 1 ) and returned that.. 
