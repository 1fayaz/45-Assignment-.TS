let listofguest= ["Fayaz" , "Farhan" , "Nabeel" , "Zurain"]

let NO = listofguest[0]

console.log(NO, "is not coming today");

listofguest.splice(0, 1, "Qurban ALI")

listofguest.forEach(newGuestname => console.log(`${listofguest}, we have a party with new Guest`))

