//..........chapter 26-30.............//

//Q # 1
document.write("<br/><br/><br/><br/>");
var inputNumber = prompt("Enter a positive number: ");
var inputNumberCN = parseFloat(inputNumber);
if (inputNumberCN < 0) {
    alert("Invalid Input");
} else {
    document.write("<br/>Number: " + inputNumberCN);
    document.write("<br/>round off value: " + Math.round(inputNumberCN));
    document.write("<br/>floor value: " + Math.floor(inputNumberCN));
    document.write("<br/>ceil value: " + Math.ceil(inputNumberCN));
}

//Q # 2
document.write("<br/><br/><br/><br/>");
var negNumber = prompt("Enter a negative number: ");
var negNumberCN = parseFloat(negNumber);
if (negNumberCN > 0) {
    alert("Invalid Input");
} else {
    document.write("<br/>Number: " + negNumberCN);
    document.write("<br/>round off value: " + Math.round(negNumberCN));
    document.write("<br/>floor value: " + Math.floor(negNumberCN));
    document.write("<br/>ceil value: " + Math.ceil(negNumberCN));
}

//Q # 3
document.write("<br/><br/><br/><br/>");
var numAbs = parseFloat(prompt("Enter a number to get it's absolute value: "));
document.write("<h1>The absolute value of " + numAbs + " is " + Math.abs(numAbs) + "</h1>");

//Q # 4
document.write("<br/><br/><br/><br/>");
document.write("Random dice value: " + Math.ceil(Math.random() * 6));

//Q # 5
document.write("<br/><br/><br/><br/>");
if (Math.ceil(Math.random() * 2) === 1)
    document.write("Random coin value: Tails");
else
    document.write("Random coin value: Heads");

//Q # 6
document.write("<br/><br/><br/><br/>");
document.write("Random number between 1 and 100: " + Math.ceil(Math.random() * 100));

//Q # 7
document.write("<br/><br/><br/><br/>");
var weight = prompt("Enter your weight in kilograms");
var weightCN = parseFloat(weight);
document.write("Th weight of user is " + weightCN + " kilograms");

//Q # 8
document.write("<br/><br/><br/><br/>");
var randNumber = Math.floor(Math.random() * 10);
var guess = parseInt(prompt("Enter a number between 1 to 10"));
if (guess == randNumber) {
    alert("Congratulation your guess is correct");
} else {
    alert("Try again ");
}