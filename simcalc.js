//Prompt to select an operation
var input = prompt('Enter "add", "sub", "mul" and "div" to select your operator:');


if (input == "add") {
    // Enter the number argument
    var num1 = Number(prompt("Enter First Number"));
    var num2 = Number(prompt("Enter Second Number"));
    alert(num1+num2);
}
else if (input == "sub") {
    // Enter the number argument
    var num1 = Number(prompt("Enter First Number"));
    var num2 = Number(prompt("Enter Second Number"));
    alert(num1-num2);
} 
else if (input == "mul") {
    // Enter the number argument
    var num1 = Number(prompt("Enter First Number"));
    var num2 = Number(prompt("Enter Second Number"));
    alert(num1*num2);
}
else if (input == "div") {
    // Enter the number argument
    var num1 = Number(prompt("Enter First Number"));
    var num2 = Number(prompt("Enter Second Number"));
    alert(num1/num2); 
}
else {
    alert("The operation is incorrect!")
}