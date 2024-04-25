"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userNames = ["Almir", "Salman", "Saim", "Admin", "Sheroz"];
userNames = [];
if (userNames.length === 0) {
    console.log("\nYour Array Is Empty We Need To Find Some Users!");
}
else {
    userNames.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`\nHello ${oneUser}, Would You Like To See A Status Report? `);
        }
        else {
            console.log(`\nHello ${oneUser}, Thankyou For Logging In Again. `);
        }
    });
}
