let guestList: string[] = [ 'Sajid', 'Rubas', 'Rasheed', 'Nauman', 'Fahad', 'Saif' ];

function inviteToDinner(guest: string) {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nSincerely,\nAbdul Ahad`);
}

// Function to print a message for the guest who can't make it
function notifyGuestCancellation(cancelledGuest: string) {
    console.log(`${cancelledGuest}, we regret to inform you that the new dinner table won't arrive in time, and we can only accommodate two guests. We're sorry, but we won't be able to have you for dinner.`);
}

// Function to inform about the limited space
function informLimitedSpace() {
    console.log("Unfortunately, the new dinner table won't arrive in time, and we can only accommodate two guests for dinner.");
}

informLimitedSpace();

// Remove guests from the list until only two names remain
while (guestList.length > 2) {
    const removedGuest : any = guestList.pop(); // Remove the last guest
    notifyGuestCancellation(removedGuest); // Notify the removed guest
}
console.log("\nFinal Guest List:");
// Print invitation messages to the two remaining guests
guestList.forEach((guest) => {
    inviteToDinner(guest);
});
// Remove the last two names from the list
guestList.pop();
guestList.pop();
// Print the empty list to confirm
console.log("Empty Guest List:", guestList);
