function show_magicians(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

function make_great(magicians: string[]): string[] {
    let greatMagicians = magicians.slice(); // Create a copy of the array
    for (let i = 0; i < greatMagicians.length; i++) {
        greatMagicians[i] = "the Great " + greatMagicians[i];
    }
    return greatMagicians;
}

let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller", "Dynamo"];

console.log("Original magicians:");
show_magicians(magicians);
console.log("\nGreat magicians:");
show_magicians(make_great(magicians));
