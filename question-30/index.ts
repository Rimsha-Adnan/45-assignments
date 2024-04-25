let userNames = ["Huzaifa","Nasir","Bilal","Admin","Daniyal"];

userNames.forEach (oneUser => {
    if(oneUser === "Admin"){
        console.log(`\nHello ${oneUser}, Would You Like To See A Status Report? `);
        
    }else{
        console.log(`\nHello ${oneUser}, Thankyou For Logging In Again. `);
        
    }
})