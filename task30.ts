let usernames: string[] = ["Hamza", "Admin", "Abdul Ahad", "Fahad"];
let i: number;

for (i = 0; i < usernames.length; i++) {
    if (usernames[i] === "Admin") {
        console.log(`Hello ${usernames[i]}, would you like to see a status report?`);
    } else {
        console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
    }
}
