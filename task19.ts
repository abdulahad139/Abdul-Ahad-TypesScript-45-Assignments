let guestList: string[] = ["Rubas", "Nauman", "Fahad"];

function inviteToDinner(guest: string) {
    console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have you join us.\nSincerely,\nAbdul Ahad`);
}

function notifyGuestCancellation(cancelledGuest: string) {
    console.log(`${cancelledGuest} regrets to inform that they can't make it to the dinner.`);
}

function informLimitedSpace() {
    console.log("Unfortunately, the new dinner table won't arrive in time, and we can only accommodate two guests for dinner.");
}

informLimitedSpace();

while (guestList.length > 2) {
    const removedGuest: any = guestList.pop(); // Remove the last guest
    notifyGuestCancellation(removedGuest); // Notify the removed guest
}

console.log("\nFinal Guest List:");
for (let i = 0; i < guestList.length; i++) {
    inviteToDinner(guestList[i]);
}

console.log(`Number of people invited to dinner: ${guestList.length}`);
