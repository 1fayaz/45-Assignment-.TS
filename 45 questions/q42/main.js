function show_magicans(magican) {
    magican.forEach(function (name) { return console.log(name); });
}
function make_great(magicans) {
    return magicans.map(function (name) { return "The Great ".concat(name); });
}
var magican_names = ["Harry Potter", "Fayaz", "ALI"];
var great_magicans = make_great(magican_names);
show_magicans(great_magicans);
