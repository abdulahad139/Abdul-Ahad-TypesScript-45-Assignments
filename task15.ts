let guestList: string[] = ["Rubas", "Noman", "Fahad"];

function inviteToDinner(guest: string) {
    console.log(`Dear ${guest},\n\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\n\nSincerely,\nAbdul Ahad\n\n`);
}

for (let i = 0; i < guestList.length; i++) {
    inviteToDinner(guestList[i]);
}

// Function to print a message for the guest who can't make it
function notifyGuestCancellation(cancelledGuest: string) {
    console.log(`${cancelledGuest} regrets to inform that they can't make it to the dinner.`);
}

const cancelledGuest = guestList[1];

notifyGuestCancellation(cancelledGuest);


guestList[1] = "Mushtaq";

console.log("\nUpdated Guest List:");

for (let i = 0; i < guestList.length; i++) {
    inviteToDinner(guestList[i]);
}
