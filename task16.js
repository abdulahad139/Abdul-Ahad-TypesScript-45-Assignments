var guestList = ["Rubas", "Nauman", "Fahad"];
function inviteToDinner(guest) {
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nSincerely,\nAbdul Ahad"));
}
function notifyGuestCancellation(cancelledGuest) {
    console.log("".concat(cancelledGuest, " regrets to inform that they can't make it to the dinner."));
}
function informBiggerTable() {
    console.log("Great news! We found a bigger dinner table!");
}
for (var i = 0; i < guestList.length; i++) {
    inviteToDinner(guestList[i]);
}
var cancelledGuest = guestList[1];
notifyGuestCancellation(cancelledGuest);
guestList[1] = "Nauman";
console.log("\nUpdated Guest List:");
for (var i = 0; i < guestList.length; i++) {
    inviteToDinner(guestList[i]);
}
informBiggerTable();
// Add new guests to the guest list
guestList.unshift("Sajid"); // Add to the begining
guestList.splice(Math.floor(guestList.length / 2), 0, "Rasheed"); // Add to the middle
guestList.push("Saif"); // Add to the end
console.log("\nExpanded Guest List:");
for (var i = 0; i < guestList.length; i++) {
    inviteToDinner(guestList[i]);
}
console.log(guestList);
