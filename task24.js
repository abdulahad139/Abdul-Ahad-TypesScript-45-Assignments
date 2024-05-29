var fruits = ['apple', 'banana', 'mango'];
var car = "Honda";
var age = 21;
var city = "Karachi";
var student = true;
// Tests for equality and inequality with strings
console.log("is car Honda? I predict true");
console.log(car == "Honda");
console.log("is car Bugatti? I predict False");
console.log(car == "Bugatti");
console.log("Is city == 'Karachi'? I predict True.");
console.log(city == 'Karachi');
console.log("Is city != 'Los Angeles'? I predict False.");
console.log(city != 'Karachi');
// Tests using the lower case function
console.log("Is car.toLowerCase() == 'honda'? I predict True.");
console.log(car.toLowerCase() == 'honda');
console.log("Is car.toLowerCase() == 'HONDA'? I predict False.");
console.log(car.toLowerCase() == 'HONDA');
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is age > 20? I predict True.");
console.log(age > 20);
console.log("Is age < 20? I predict False.");
console.log(age < 20);
console.log("Is age = 21? I predict True.");
console.log(age == 21);
console.log("Is age <= 25? I predict True.");
console.log(age <= 25);
console.log("Is age >= 30? I predict False.");
console.log(age >= 30);
// Tests using "and" and "or" operators
console.log("Is age > 20 and numberOfPets == 3? I predict True.");
console.log(age > 20 && city == "Karachi");
console.log("Is age < 20 or numberOfPets == 3? I predict True.");
console.log(age == 21 || city == "lahore");
// Test whether an item is in an array
console.log("Is 'apple' in fruits? I predict True.");
console.log(fruits.includes('apple'));
// Test whether an item is not in an array
console.log("Is 'grape' not in fruits? I predict True.");
console.log(!fruits.includes('grape'));
