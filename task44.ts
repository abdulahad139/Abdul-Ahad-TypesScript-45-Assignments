function make_sandwich(...items: string[]) {
    console.log("You have ordered a sandwich with the following items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("\n");
}

make_sandwich("Ham", "Cheese", "Lettuce", "Tomato");
make_sandwich("Turkey", "Avocado", "Bacon");
make_sandwich("Peanut Butter", "Jelly");
