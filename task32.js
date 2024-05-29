var current_users = ["hamza", "abdulahad", "fahad"];
var new_users = ["muneeb", "sarim", "fahad", "hamza"];
for (var i = 0; i < new_users.length; i++) {
    if (current_users.includes(new_users[i])) {
        console.log("This username has already taken. You have to enter new username.");
    }
    else {
        console.log("This username is available");
    }
}
