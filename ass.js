sandal = 1800;
bevPas = 3000;
smoothie = 2500;
food = 5500;

tot = sandal + bevPas + smoothie + food;

item1 = prompt("Enter first item: 'sandal', 'bevPas', 'smoothie', 'food'");

if (item1 === "sandal" || item1 === "bevPas" || item1 === "smoothie" || item1 === 'food') {
    if (item1 === "sandal") {
        price = 0 + sandal;
        alert("The " + item1 + " is " + price);
    } else if (item1 === "bevPas") {
        price = 0 + bevPas;
        alert("The " + item1 + " is " + price);
    } else if (item1 === "smoothie") {
        price = 0 + smoothie;
        alert("The " + item1 + " is " + price);
    } else if (item1 === "food") {
        price = 0 + food;
        alert("The " + item1 + " is " + price);
    }

    item2 = prompt("Enter second item: 'sandal', 'bevPas', 'smoothie', 'food'");

    if (item2 === "sandal" || item2 === "bevPas" || item2 === "smoothie" || item2 === 'food') {
        if (item2 === "sandal") {
            price = price + sandal;
            alert("The price of " + item1 + " and " + item2 +" is " + price);
        } else if (item2 === "bevPas") {
            price = price + bevPas;
            alert("The price of " + item1 + " and " + item2 +" is " + price);
        } else if (item2 === "smoothie") {
            price = price + smoothie;
            alert("The price of " + item1 + " and " + item2 +" is " + price);
        } else if (item2 === "food") {
            price = price + food;
            alert("The price of " + item1 + " and " + item2 +" is " + price);
        }
        item3 = prompt("Enter third item: 'sandal', 'bevPas', 'smoothie', 'food'");
        if (item3 === "sandal" || item3 === "bevPas" || item3 === "smoothie" || item3 === 'food') {
            if (item3 === "sandal") {
                price += sandal;
                alert("The price of " + item1 + " , " + item2 + " and " + item3 +" is " + price);
            } else if (item3 === "bevPas") {
                price += bevPas;
                alert("The price of " + item1 + " , " + item2 + " and " + item3 +" is " + price);
            } else if (item3 === "smoothie") {
                price += smoothie;
                alert("The price of " + item1 + " , " + item2 + " and " + item3 +" is " + price);
            } else if (item3 === "food") {
                price += food;
                alert("The price of " + item1 + " , " + item2 + " and " + item3 +" is " + price);
            }
            if (price > 10000) {
                alert("Sorry you will be buying beyond your allawance");
            } else {
                alert('The total item price of' + ' ' + item1 + ' '+ item2 + ' '+ item3 + ' is '+ price);
            }
        } else {
            alert("Invalid third entry!");
        }
    } else {
        alert("Invalid second entry!");
    }
} else {
    alert("Invalid first entry!");
}