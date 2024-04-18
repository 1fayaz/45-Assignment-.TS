function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a Sandwhich with the following iteams: \n");
    items.forEach(function (singleItem) { return console.log("." + singleItem); });
    console.log("\nNow Enjoy Sandwich");
}
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");
makeSandwich("bread", "Butter");
makeSandwich("bread", "Butter", "Mayo", "Chicken", "Cheese", "Mayo", "Egg", "Lettuce", "Tomato");
