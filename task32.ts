let current_users:string[] = ["hamza","abdulahad","fahad"];
let new_users:string[] = ["muneeb","sarim","fahad","hamza"];

for (let i=0;i<new_users.length;i++){
    if (current_users.includes(new_users[i])){// if the entered username is already taken 
        console.log("This username has already taken. You have to enter new username.");
    }
    else{
        console.log("This username is available");
    }
}