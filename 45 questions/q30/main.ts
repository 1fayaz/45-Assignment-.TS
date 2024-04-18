let Users : string [] = ["Eric", "Fayaz", "Ali", "Nabeel", "zonain"]

for (let user of Users) {
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }else {
        console.log(`Hello ${user}, thank you for logging in again.`);
        
    }
}