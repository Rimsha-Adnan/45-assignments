let guests = ["Areeba","Rumaisa","Meerab"];
let first =  guests.shift();
console.log(`"${first}" cant make the dinner with us  `);


guests.splice(0,0 ,"Tina")



console.log(`I Found A Bigger Dinner Table `);

guests.unshift("noor");

let middle = guests.length / 2
guests.splice(middle, 0,"fatima")

guests.push("rimsha")

console.log("\nIt is an updated list:\n ");



guests.forEach(invite => console.log(`you guys can join me for dinner  "${invite}"`))
