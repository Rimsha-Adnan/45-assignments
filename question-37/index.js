"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "Large", message = "I Love TypeScript") {
    console.log(`\nCreating A ${size} Size Shirt With ${message} Prints On Shirt`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I Love JavaScript");
