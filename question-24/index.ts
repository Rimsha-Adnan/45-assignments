let  car = "car";
let uppercaseCar = "CAR";
let five = 5;
let ten = 10;
let names = ["rimsha","nigar","arhama"];

console.log("\nIs Car Is Equal To Car? ");

console.log(car == "car");

console.log("\nIs Car Is Not Equal To Car?");

console.log(car != "car");

console.log("\nIs CAR Is Equal To Car After Converting To Lowercase?");

console.log(uppercaseCar.toLowerCase() == "car");

console.log("\nIs CAR Is Not Equal To Car After Converting To lowercase?");

console.log(uppercaseCar.toLowerCase() != "car");

console.log("\nIs Five Is Equal To Ten?");

console.log(five == ten);

console.log("\nIs Five Is Not Equal To Ten? ");

console.log(five != ten);

console.log("\nIs Five Is Greater Than Ten?");

console.log(five > ten);

console.log("\nIs Five Is Less Than Ten?");

console.log(five < 10);

console.log("\nIs Ten Is Greater Than Or Equal To 5? ");

console.log(ten >= 5);

console.log("\nTen Is Less Than Or Equal To 8?");

console.log(ten <= 8);

console.log("\nFive Is Not Equal To Ten And Ten Is Greater Than Five?");

console.log(five != 10 && ten > 5);

console.log("\nFive Is Not Equal To Ten And Ten Is Greater Than Five");

console.log(five != 10 && ten >30);

console.log("\nTen Is Greater Than 20 Or Ten Is Equal To 10?");

console.log(ten > 20 || ten == 10);

console.log("\nTen Is Greater Than 20 Or Ten Is Not Equal To 10?");

console.log(ten > 20 || ten != 10);

console.log("\nIs Nigar Include In My Names Array?");

console.log(names.includes("nigar"));

console.log("\nIs Nigar Not Imclude In My Names Array?");

console.log(!names.includes("nigar"));
