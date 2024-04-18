var personName = "Fayaz ali";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, function (title) { return title.toUpperCase(); }));
