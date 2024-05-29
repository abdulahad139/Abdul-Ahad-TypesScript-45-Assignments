let alien_color: string;

// Version that passes the if test
alien_color = 'green';
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}

// Version that fails the if test
alien_color = 'red';
if (alien_color === 'green') {
    // This block will not execute, so there will be no output
    console.log("The player just earned 5 points.");
}
