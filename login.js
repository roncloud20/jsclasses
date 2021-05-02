data = [
    {
        username: "roncloud",
        password: "pass"
    },
    {
        username: "admin",
        password: "pass001"
    },
]

newsfeed = [
    {
        username: "roncloud",
        message: "Enter the following"
    },
    {
        username: "admin",
        message: "check it out"
    },
]
var user = prompt("Ente username");
var pass = prompt("Enter password");
for (var i = 0; i< data.lenght; i++) {
    if(user === data[i].username && pass === data[i].pass) {
       console.log(newsfeed)
    } else {
        alert("Wrong username and password!")
    }
}
