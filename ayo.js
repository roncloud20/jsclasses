// Tenary Operator
// var lagos=Number(prompt("How Much do you have"));
// (lagos => 100  ) ? alert("Go To High Land") : alert("Go Home!!!!!!!");
//  var user = prompt("Enter Your Username Here");
//  (user === "Fawas" || user === "Chacho") ? alert("Welcome") : alert("Invalid Entry");
var user = prompt("Enter You Username Here");
var Pass = prompt("Enter your Password Here");
// (user !== "admin" || pass !== "pass") ? alert("Invalid Entry !!!!!!") : alert("Welcome !!!!!!!!")
// (user === "admin" || pass === "pass") ? alert("Welcome !!!!!!!!") : alert("Invalid Entry");

if (
        user === "admin" ||  
        pass === "pass"
    ) {
        alert("Welcome");
    } else {
        alert("Invalid Entry");
    }