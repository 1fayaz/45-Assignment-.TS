let current_Users = ["Eric", "Fayaz", "Ali", "Nabeel", "zonain"]

let new_Users = ["Fayaz", "zahid", "Nosheen", "Farhan", "zonain"]

new_Users.forEach(new_one_user => {
  let our_condition = current_Users.some (current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
  
  if(our_condition){
    console.log(`Sorry ${new_one_user} is already taken!`)
    
  }else {
  console.log(`This Username ${new_one_user} is available`);
  }
})