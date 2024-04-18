var listofguest = ["Fayaz", "Farhan", "Nabeel", "Zurain"];
var NO = listofguest[0];
console.log(NO, "is not coming today");
listofguest.splice(0, 1, "Qurban ALI");
listofguest.forEach(function (newGuestname) { return console.log("".concat(listofguest, ", we have a party with new Guest")); });
