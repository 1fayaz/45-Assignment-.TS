var current_Users = ["Eric", "Fayaz", "Ali", "Nabeel", "zonain"];
var new_Users = ["Fayaz", "zahid", "Nosheen", "Farhan", "zonain"];
new_Users.forEach(function (new_one_user) {
    var our_condition = current_Users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
