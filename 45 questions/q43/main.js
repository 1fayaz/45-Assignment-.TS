function show_magicans(magican) {
    magican.forEach(function (name) { return console.log(name); });
}
function make_great(magicans) {
    return magicans.map(function (name) { return "The Great ".concat(name); });
}
var magican_names = ["Harry Potter", "Fayaz", "ALI"];
var copy_magican_names = magican_names.slice();
var copy_great_magicans = make_great(copy_magican_names);
console.log("\norigianl Array\n");
show_magicans(magican_names);
console.log("\ncopy Array\n ");
show_magicans(copy_great_magicans);
// show_magicans(magican_names)
