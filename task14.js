// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.
var guestList = ["Rubas", "Neha", "Fahad"];
function inviteToDinner(guest) {
    console.log("Dear ".concat(guest, ",\n\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\n\nSincerely,\nAbdul Ahad]"));
}
for (var i = 0; i < guestList.length; i++) {
    inviteToDinner(guestList[i]);
}
