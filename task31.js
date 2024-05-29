var users = [];
for (var i = 0; i < users.length; i++) {
    if (users.length === 0) {
        console.log("We need to find some users!");
    }
    else {
        if (users[i] === "Admin") {
            console.log("Hello ".concat(users[i], ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(users[i], ", thank you for logging in again."));
        }
    }
}
