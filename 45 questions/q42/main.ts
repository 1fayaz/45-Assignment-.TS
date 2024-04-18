function show_magicans(magican: string []){
    magican.forEach (name => console.log(name));
}

function make_great (magicans : string[]){
    return magicans.map(name => `The Great ${name}`)
}


let magican_names =["Harry Potter", "Fayaz", "ALI"];

let great_magicans = make_great(magican_names);

show_magicans(great_magicans)
