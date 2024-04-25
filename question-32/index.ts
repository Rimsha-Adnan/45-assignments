let current_users = ["Fiza","Mahnoor","Ali","Ahmed","Zain"];
let new_users = ["Fatima","Ali","Rumaisa","Taha","Ahmed"];

new_users.forEach(new_one_users =>{
    let our_condition = current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_users.toLowerCase());
    if(our_condition){
        console.log(`\nSorry ${new_one_users} Is Already Taken.`);
        
    }else{
        console.log(`\nThis Username ${new_one_users} Is Avalaible.`);
        
    }
})