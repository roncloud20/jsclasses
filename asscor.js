// Assigning mall price to every items on list 
var sandal = 1800;
var bev = 3000;
var smoothie = 2500;
var food = 5500;

// Ask for Pocket value
var pocketMoney = Number(prompt("Enter your pocket money!"));

//Entrying their first item
var item1 = prompt("Enter your first item: (sandal, bev, smoothie and food)").toLowerCase();

//Creating the coditional statement
if (item1 === "sandal" || item1 === "bev" || item1 === "smoothie" || item1 === "food") {
    // Condition to check for value of each item 
    if (item1 === "sandal") {
        var price = sandal;
        alert("The price of "+ item1 + " is " + price);
    } else if (item1 === "bev") {
        var price = bev;
        alert("The price of "+ item1 + " is " + price);
    } else if (item1 === "smoothie") {
        var price = smoothie;
        alert("The price of "+ item1 + " is " + price);
    } else if (item1 === "food") {
        var price = food;
        alert("The price of "+ item1 + " is " + price);
    }

    //Entrying their first item
    var item2 = prompt("Enter your second item: (sandal, bev, smoothie and food)").toLowerCase();
    
    if (item2 === 'sandal' || item2 === 'bev' || item2 === 'smoothie' || item2 === 'food') {
        if (item2 === "sandal") {
            var price = price + sandal;
            alert("The price of " + item1 + " and  " + item2 + " is " + price);
        } else if (item2 === "bev") {
            var price = price + bev;
            alert("The price of " + item1 + " and  " + item2 + " is " + price);
        } else if (item2 === "smoothie") {
            var price = price + smoothie;
            alert("The price of " + item1 + " and  " + item2 + " is " + price);
        } else if (item2 === "food") {
            var price = price + food;
            alert("The price of " + item1 + " and  " + item2 + " is " + price);
        }

        //Entrying their first item
        var item3 = prompt("Enter your third item: (sandal, bev, smoothie and food)").toLowerCase();
        
        if (item3 === 'sandal' || item3 === 'bev' || item3 === 'smoothie' || item3 === 'food') {
            if (item3 === "sandal") {
                var price = price + sandal;
                alert("The price of " + item1 + ",  " + item2 + " and " + item3 + " is " + price);
            } else if (item3 === "bev") {
                var price = price + bev;
                alert("The price of " + item1 + ",  " + item2 + " and " + item3 + " is " + price);
            } else if (item3 === "smoothie") {
                var price = price + smoothie;
                alert("The price of " + item1 + ",  " + item2 + " and " + item3 + " is " + price);
            } else if (item3 === "food") {
                var price = price + food;
                alert("The price of " + item1 + ",  " + item2 + " and " + item3 + " is " + price);
            }
        } else {
            alert('Unknown Item');
        }
    } else {
        alert('Unknown Item');
    }
} else {
    alert("Unknown item");
}

var change = pocketMoney - price;

if (price > pocketMoney) {
    alert("Sorry, you can't afford all this items");
    alert("Your are to balance " + change);
} else {
    alert("You are eligable to buy all this items");
    alert("Your change is remaining " + change);
}