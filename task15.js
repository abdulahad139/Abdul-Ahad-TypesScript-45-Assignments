// Define an array to hold the names of the guests
var guestList = ["Rubas", "Neha", "Fahad"];
function inviteToDinner(guest) {
    console.log("Dear ".concat(guest, ",\n\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\n\nSincerely,\nAbdul Ahad\n\n"));
}
for (var i = 0; i < guestList.length; i++) {
    inviteToDinner(guestList[i]);
}
// Function to print a message for the guest who can't make it
function notifyGuestCancellation(cancelledGuest) {
    console.log("".concat(cancelledGuest, " regrets to inform that they can't make it to the dinner."));
}
var cancelledGuest = guestList[1];
notifyGuestCancellation(cancelledGuest);
guestList[1] = "Mushtaq";
console.log("\nUpdated Guest List:");
for (var i = 0; i < guestList.length; i++) {
    inviteToDinner(guestList[i]);
}
