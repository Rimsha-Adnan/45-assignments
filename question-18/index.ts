let countries : string[] = ["Canada","Denmark","Brazil","Amesterdam"];

console.log("orginal Order :" , countries);

console.log("Alphabetical Order :" , [... countries].sort());

console.log("Still In Orginal Order :" ,  countries);

console.log("Revers Order :" , [...countries].reverse());

console.log("Still In Orginal Order :" ,  countries);

console.log("Orginal Array Reversed:" , countries.reverse());

console.log("Back To Orginal Order:" , countries.reverse());

console.log("Sorted In Alphabetical Order:", countries.sort());

console.log("Orginal Array Reversed Again:" , countries.reverse());

