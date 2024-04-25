let guests : string[] = ["Areeba","Rumaisa","Meerab"];
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

console.log("unfortunately , The New Dinner Table Wont Arrive On Time, So I Can Invite Two Guest For Dinner");

while(guests.length > 2){
    let removeGuests = guests.pop();
    console.log(`SORRY, ${removeGuests} I Can't Invite You For Dinner`);
    
}
console.log("Invitation To The Last Two Guests");
guests.forEach( lastTwo => console.log(`Luckily ${lastTwo} You Are Still Invited For Dinner`));

guests.pop();
guests.pop();

console.log("Empty List", guests);



