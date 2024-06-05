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
function createCar(manufacturer, modelName, options) {
    if (options === void 0) { options = {}; }
    // Create a car object with the required properties
    var car = __assign({ manufacturer: manufacturer, modelName: modelName }, options // Spread the options into the car object
    );
    return car;
}
var car1 = createCar("Toyota", "Corolla", { color: "Red", sunroof: true });
var car2 = createCar("Tesla", "Model 3", { color: "Black", autopilot: true, wheels: "Sport" });
console.log(car1);
console.log(car2);
