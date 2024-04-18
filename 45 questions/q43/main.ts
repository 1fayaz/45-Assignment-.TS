function show_magicans(magican: string []){
    magican.forEach (name => console.log(name));
}

function make_great (magicans : string[]){
    return magicans.map(name => `The Great ${name}`)
}


let magican_names =["Harry Potter", "Fayaz", "ALI"];

let copy_magican_names = magican_names.slice();

let copy_great_magicans = make_great(copy_magican_names);

console.log("\norigianl Array\n");

show_magicans(magican_names);

console.log("\ncopy Array\n ");

show_magicans(copy_great_magicans);

// show_magicans(magican_names)
