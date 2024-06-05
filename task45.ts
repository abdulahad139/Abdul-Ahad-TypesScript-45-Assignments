function createCar(manufacturer: string, modelName: string, options: { [key: string]: any } = {}): { manufacturer: string, modelName: string, [key: string]: any } {
    // Create a car object with the required properties
    let car = {
        manufacturer: manufacturer,
        modelName: modelName,
        ...options // Spread the options into the car object
    };

    return car;
}

let car1 = createCar("Toyota", "Corolla", { color: "Red", sunroof: true });
let car2 = createCar("Tesla", "Model 3", { color: "Black", autopilot: true, wheels: "Sport" });

console.log(car1);
console.log(car2);
