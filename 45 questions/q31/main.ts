let Users : string [] = ["Eric", "Fayaz", "Ali", "Nabeel", "zonain"]

if (Users.length === 0) {
    console.log("we need to find some users!");

}else {
    for (let user of Users) {
        if (user === "admin") {
            console.log("Hello admin, would you like to see a status report?")
            
        }else {
            console.log(`Hello ${user},thank you for logging in agian`);
            
        }
    }
}

Users = []

if (Users.length === 0) {
    console.log("we need to find some users!");
    
}