let listofguest= ["Fayaz" , "Farhan" , "Nabeel" , "Zurain"]

let NO = listofguest[0]

console.log(NO, "is not coming today");

listofguest.splice(0, 1, "Qurban ALI")

console.log("We have a new bigger table!");

listofguest.unshift("Baba");

listofguest.push("daniyal")

let middleGuest :number = Math.floor(listofguest.length / 2)

listofguest.splice(middleGuest, 0, "Nosheen")

console.log("new list of Guests")

listofguest.forEach(newGuest => console.log(`${newGuest}, You are invited to the party`));


console.log("aloss we dont have table for many so I can only entertain two Guests at a time");

while(listofguest.length >2) {
    let removeGuests = listofguest.pop ();
    console.log(`sorry ${removeGuests} because of limited seats you are not invited 🥺`);
    
}


console.log("only 2 are invited");

listofguest.forEach(onlyTwo => console.log(`${onlyTwo} only you are invited`))

listofguest.pop()
listofguest.pop()

console.log("No one is invited 🥺 list is empty :", listofguest);





