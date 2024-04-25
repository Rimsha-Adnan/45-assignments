"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_sandwich(...items) {
    console.log("\nMaking A Sandwich With The Following Items\n");
    items.forEach(singleItems => console.log("-" + singleItems));
    console.log("\nNow Enjoy Your Sandwich\n");
}
make_sandwich("Chicken", "Cucumber", "Mayo", "Egg");
make_sandwich("Bread", "Egg", "Butter");
make_sandwich("Bread", "Mayo", "Cabbage", "Cheese", "ketchup", "cucumber", "chicken", "Egg", "Lettuce", "Olives");
