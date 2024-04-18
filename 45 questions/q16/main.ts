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









