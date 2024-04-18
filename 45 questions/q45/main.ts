// function create_car(manufacturer, model ,...options){
//     let car = {
//         manufacturer: manufacturer,
//         model: model,
//     }

//     options.forEach(option => {
//         let [key, value] = option.split(":");
//         car[key.trim()] = value.trim();
//     })

//     return car
// }


// let my_car = create_car("Haval", "H6","Color : Black", "Hybrid : True" )

// console.log(my_car)




type car = {
    manufacture: string
    model: string
    [key: string]: any; 
}

function create_car( manufacture: string, model: string, optinal: Record<string, any>) : car {
    return {
        manufacture,
        model,
        ...optinal
    }
}

const my_car: car = create_car("Haval","H6", {color:"Black", Hybrid: "True"})

console.log(my_car);















