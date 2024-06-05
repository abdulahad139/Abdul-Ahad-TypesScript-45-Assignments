function make_Tshirt(size, text) {
    if (size === void 0) { size = "L"; }
    if (text === void 0) { text = "I love TypeScript"; }
    console.log("The shirt size is ".concat(size, " and the message printed on it is: \"").concat(text, "\""));
}
make_Tshirt(); // for large shirt
make_Tshirt("M"); // for medium shirt with default message
make_Tshirt("S", "I can write code in Python"); // for small shirt with custom message
