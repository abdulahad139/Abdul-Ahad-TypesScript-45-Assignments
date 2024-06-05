function show_magicians(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}

function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

// Create an array of magician names
let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller", "Dynamo"];

make_great(magicians);
show_magicians(magicians);
