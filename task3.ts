//Question 3
// Name Cases: Store a person’s name in a variable, and 
// then print that person’s name in lowercase, uppercase, and titlecase.
// lowercase
// UPPERCASE
// Title Case
let person_name = "ahmed";
console.log("Lowercase:", person_name.toLowerCase());
console.log("Uppercase:",person_name.toUpperCase());
console.log("Titlecase:",person_name.replace(/\b\w/g, c => c.toUpperCase()));