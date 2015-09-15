//JS Workshop Monday 9/14

// Log all answers to the console and write them to document
// =======================================================

//1. Log your name to the console (as a string).

console.log('Andy');

//2. Declare a variable called name, log it to the console.

var name = "Andy"
console.log(name);

//3. Declare two variables with number values. Add, subtract, multiply and divide them.

var number1 = 5;
var number2 = 2;
var add  = (number1 + number2);
var sub = (number1 - number2);
var mult = (number1 * number2);
var div = (number1 / number2);

//4. Declare two variables with string values. Create a third variable that concatenates them.

var tasty ='moldy';
var type ='cheese';
var smell= tasty + type;


//5. Add, subract, multiply and divide the strings '5' and '3'. Observe and explain the results.

console.log('5' + '3');
console.log('5' - '3');
console.log('5' * '3');
console.log('5' / '3');

1) 53 creates a 2 digit number from the single numbers
2) 2 works fine
3) 15 works fine
4) 1.6 works fine

//6. Create a prompt that asks a user to pick a number. Double the answer.

var numberPick = prompt('Enter a number any number');
var dub = numberPick * 2;

//7. Create a custom alert.

alert('Don\'t Look Up, That\'s my dog!')

//8. Declare three variables called length, width and height. Calculate area and volume.

var length = 5;
var width = 10;
var height = 15;
var area = (length * width);
var volume = (height * width * length) + ' Cubic Inches';

//9. Ask for a user's name, age and city. In a single command display/log the sentence:
// "My name is...I'm....years old, and I live in....."

var name1 = prompt('Enter your Name')
var age1 = prompt('How old are you?')
var city1 = prompt('What city do you live in')

console.log('Your Name is ' + name1 + '.  You Are ' + age1 + ' years old, and you live in '+ city1 '.');

//10. Create an alert that uses the response from a prompt.
var Dontdoit = prompt('Enter something here');
alert(Dontdoit);
