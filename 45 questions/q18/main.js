var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriestovisit = ["Russia", "Pakistan", "Gaza", "Syria", "Falasteen"];
console.log("Original order :", countriestovisit);
console.log("Alphabatical Order:", __spreadArray([], countriestovisit, true).sort());
console.log("Again in original order:", countriestovisit);
console.log("reversed order:", __spreadArray([], countriestovisit, true).reverse());
console.log("Again in origianl order:", countriestovisit);
console.log("reversed array agian:", countriestovisit.reverse());
console.log("reversed array agian to the original order:", countriestovisit.reverse());
console.log("sort in Alphbetical order:", countriestovisit.sort());
console.log("reversed array agian:", countriestovisit.reverse());
