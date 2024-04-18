var listofguest = ["Fayaz", "Farhan", "Nabeel", "Zurain"];
var NO = listofguest[0];
console.log(NO, "is not coming today");
listofguest.splice(0, 1, "Qurban ALI");
console.log("We have a new bigger table!");
listofguest.unshift("Baba");
listofguest.push("daniyal");
var middleGuest = Math.floor(listofguest.length / 2);
listofguest.splice(middleGuest, 0, "Nosheen");
console.log("new list of Guests");
listofguest.forEach(function (newGuest) { return console.log("".concat(newGuest, ", You are invited to the party")); });
console.log("aloss we dont have table for many so I can only entertain two Guests at a time");
while (listofguest.length > 2) {
    var removeGuests = listofguest.pop();
    console.log("sorry ".concat(removeGuests, " because of limited seats you are not invited \uD83E\uDD7A"));
}
console.log("only 2 are invited");
listofguest.forEach(function (onlyTwo) { return console.log("".concat(onlyTwo, " only you are invited")); });
listofguest.pop();
listofguest.pop();
console.log("No one is invited 🥺 list is empty :", listofguest);
