function describe_City(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_City("Karachi");
describe_City("Hyderabad");
describe_City("Lahore");
describe_City("Makkah", "Saudi Arab");
