function makeSandwich (...items : string[]) {
    console.log("\nMaking a Sandwhich with the following iteams: \n");
    
    items.forEach(singleItem => console.log("-" + singleItem));

    console.log("\nNow Enjoy Sandwich");
    
}

makeSandwich("Chicken", "Cheese", "Mayo", "Egg")

makeSandwich("bread", "Butter")

makeSandwich("bread", "Butter", "Mayo", "Chicken", "Cheese", "Mayo", "Egg", "Lettuce","Tomato")