// function create_car(manufacturer, model ,...options){
//     let car = {
//         manufacturer: manufacturer,
//         model: model,
//     }
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function create_car(manufacture, model, optinal) {
    return __assign({ manufacture: manufacture, model: model }, optinal);
}
var my_car = create_car("Haval", "H6", { color: "Black", Hybrid: "True" });
console.log(my_car);
