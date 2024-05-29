var usernames = ["Hamza", "Admin", "Abdul Ahad", "Fahad"];
var i;
for (i = 0; i < usernames.length; i++) {
    if (usernames[i] === "Admin") {
        console.log("Hello ".concat(usernames[i], ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(usernames[i], ", thank you for logging in again."));
    }
}
