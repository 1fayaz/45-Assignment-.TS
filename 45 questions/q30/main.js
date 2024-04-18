var Users = ["Eric", "Fayaz", "Ali", "Nabeel", "zonain"];
for (var _i = 0, Users_1 = Users; _i < Users_1.length; _i++) {
    var user = Users_1[_i];
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(user, ", thank you for logging in again."));
    }
}
