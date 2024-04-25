function create_car(manufacturer: string, model : string, ...options:string[]){
let car:any = {
    manufacturer : manufacturer,
    model : model,

};

options.forEach(option => {
    let [key ,value] = option.split(":");

    car[key.trim()]= value.trim();
});

return car;

}
let my_car = create_car("Toyota","Civic","Color:White","year:2022");

console.log(my_car);
