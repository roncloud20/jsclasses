var entry = prompt("Enter \"add\", \"sub\", \"mul\" and \"div\" to select your operator:");

// Function to add up two numbers
function add(num1, num2) {
    alert(num1 + num2); 
}

// Function to subtract two numbers
function sub(num1, num2) {
    alert(num1 - num2);
}

// Function to Multiple two numbers
function multi(num1, num2) {
    alert(num1 * num2);
}

// Function to divide two numbers
function div(num1, num2){
    alert(num1/num2);
}

if(entry == "add") {
    x= Number(prompt("Enter first number"));
    y= Number(prompt("Enter second number"));
    add(x,y);
}
