/* Document.write() is a Javascript method that is used to display whatever you place inside of it's round braces. Use Document.write() to display Javascript content on HTML/PHP Pages. */
document.write('Hello, World');

/* Variables are used by programming languages to hold data for repeated and later use. */
var myFirstVariable = 25;
document.write('<br>' + myFirstVariable);

/* Javascript, like all programing languages, is capable of performing very complex and very simple math. But like all programming languages, you have to be explicit about what you want the computer to do. Below, we will create two variables, add them together then display them on the screen. */
var firstNumber = 16;
var secondNumber = 4;
var sumOfNumbers = firstNumber + secondNumber;
document.write('<br>' + sumOfNumbers);

/* Below we will subtract the above firstNumber and the secondNumber from each other and display it on the screen */
var subtractNumbers = firstNumber - secondNumber;
document.write('<br>' + subtractNumbers);

/* Data types are different forms of data that are recognized by computers and are operated on using programming languages. The most basic datatype is a number. */

var numberDataType = 58;

/* Second most basic datatype is a string. A string, in other words, is a letter, or a sentence, a paragraph, or anything that is not a true number that can be operated on by math operations. Strings are always placed inside of quotes. */

var stringDataType = 'This is a string';
var alsoStringDataType = '565';
var testNumber = firstNumber + alsoStringDataType;

document.write('<br>' + testNumber);

// This is a single line comment. It's meant for very short notes.

/* this is a multi line comment. It is meant for longer comments that may be paragraphs long. */

