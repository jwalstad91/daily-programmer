// TODO
    // cleanup
    // 0 cases
    // negative cases

// setup. clean this up later to be nicer-looking
let input = "12 * 2";
let parsedInput = input.split(" ");
let x = parseInt(parsedInput[0]);
let y = parseInt(parsedInput[2]);
let z = parsedInput[1];
calculate(x, y, z);

function add(x: number, y: number) {
    let result = x + y;
    return result;
}

function subtract(x: number, y: number) {
    return 0;
}

function multiply(x: number, y: number) {
    let z = 0;

    // Check for case 0
    if (x == 0 || y == 0) { return 0; }
    
    for (let i = 0; i < y; i++) {
        z += x;
    }

    return z;
}

function divide(x: number, y: number) {
    return 0;
}

// x is equal to a base value
// y is equal to a power to raise x by
function exponent(x: number, y: number) {
    return 0;
}

function calculate(x: number, y: number, z: string) {
    let result = 0;

    if (z == "+") { result = add(x, y); }
    else if (z == "-") { result = subtract(x, y); }
    else if (z == "*") { result = multiply(x, y); }
    else if (z == "/") { result = divide(x, y); }
    else if (z == "^") { result = exponent(x, y); }
    else { console.log("Invalid operation."); }

    console.log(result);
}