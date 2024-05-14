var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Tokyo", "Paris", "New York", "Dubai", "Canada"];
// Print the array in its original order
console.log("Original Order:");
console.log(placesToVisit);
// Print the array in alphabetical order without modifying the original list
console.log("\nAlphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort());
// Print the array to show it's still in its original order
console.log("\nOriginal Order:");
console.log(placesToVisit);
// Print the array in reverse alphabetical order without changing the original list
console.log("\nReverse Alphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
// Print the array to show it's still in its original order
console.log("\nOriginal Order:");
console.log(placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
// Print the array to show that its order has changed
console.log("\nReversed Order:");
console.log(placesToVisit);
// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
// Print the array to show it's back to its original order
console.log("\nOriginal Order:");
console.log(placesToVisit);
// Sort the array so it's stored in alphabetical order
placesToVisit.sort();
// Print the array to show that its order has been changed
console.log("\nSorted in Alphabetical Order:");
console.log(placesToVisit);
// Sort the array to change it to reverse alphabetical order
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
// Print the array to show that its order has changed
console.log("\nSorted in Reverse Alphabetical Order:");
console.log(placesToVisit);
