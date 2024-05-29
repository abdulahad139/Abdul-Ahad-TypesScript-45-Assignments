var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers.length; i++) {
    var suffix = void 0;
    if (numbers[i] === 1) {
        suffix = "st";
    }
    else if (numbers[i] === 2) {
        suffix = "nd";
    }
    else if (numbers[i] === 3) {
        suffix = "rd";
    }
    else {
        suffix = "th";
    }
    console.log("".concat(numbers[i]).concat(suffix));
}
