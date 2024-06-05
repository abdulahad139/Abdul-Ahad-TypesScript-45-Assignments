function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great(magicians) {
    var greatMagicians = magicians.slice(); // Create a copy of the array
    for (var i = 0; i < greatMagicians.length; i++) {
        greatMagicians[i] = "the Great " + greatMagicians[i];
    }
    return greatMagicians;
}
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller", "Dynamo"];
console.log("Original magicians:");
show_magicians(magicians);
console.log("\nGreat magicians:");
show_magicians(make_great(magicians));
