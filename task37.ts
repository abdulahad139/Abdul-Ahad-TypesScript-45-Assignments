function make_Tshirt(size:string="L",text:string="I love TypeScript"){
    console.log(`The shirt size is ${size} and the message printed on it is: "${text}"`);
}

make_Tshirt(); // for large shirt
make_Tshirt("M"); // for medium shirt with default message
make_Tshirt("S","I can write code in Python"); // for small shirt with custom message