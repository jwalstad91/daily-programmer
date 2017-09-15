`
# 331 - The Adding Calculator
https://www.reddit.com/r/dailyprogrammer/comments/6ze9z0/20170911_challenge_331_easy_the_adding_calculator/
`
let inputs = [
            '12 + 25',
            '-30 + 100',
            '100 - 30',
            '100 - -30',
            '-25 - 29',
            '-41 - -10',
            '9 * 3',
            '9 * -4',
            '-4 * 8',
            '-12 * -9',
            '100 / 2',
            '75 / -3',
            '-75 / 3',
            '7 / 3',
            '0 / 0',
            '5 ^ 3',
            '-5 ^ 3',
            '-8 ^ 3',
            '-1 ^ 1',
            '1 ^ 1',
            '0 ^ 5',
            '5 ^ 0',
            '10 ^ -3'
            ];

inputs.forEach(element => {
    let parsedInput = element.split(" ");
    let x = parseInt(parsedInput[0]);
    let y = parseInt(parsedInput[2]);
    let z = parsedInput[1];
    calculate(x, y, z);
});

// let input = "5 ^ 3";
// let parsedInput = input.split(" ");
// let x = parseInt(parsedInput[0]);
// let y = parseInt(parsedInput[2]);
// let z = parsedInput[1];
// calculate(x, y, z);

function add(x: number, y: number) {
    return x + y;
}

function subtract(x: number, y: number) {
    return add(x, negate(y));
}

function multiply(x: number, y: number) {
    let result = 0;
    let i = y;

    // Resolve negative operand
    if (y < 0) { i = negate(y); }
    
    // Check for case 0
    if (x == 0 || y == 0) { return result; }

    for (let j = 0; j < i; j++) {
        result += x;
    }

    // Ensure proper sign is applied to result
    if ((x < 0) && (y < 0)) { result = negate(result); }
    else if (y < 0) { result = negate(result); }

    return result;
}

// x: divisor
// y: dividend
function divide(x: number, y: number) {
    let i = 0; // quotient
    let j = x; // dividend
    let k = y; // divisor

    if (x < 0) { j = negate(x); }
    if (y < 0) { k = negate(y); }

    // Handle division by 0
    if ((x == 0) || y == 0) { return undefined; }

    do {
        // Will not handle remainders; divides up to the nearest whole integer
        if (j >= k) {
            j = subtract(j, k);
            i++;
        }
        else { j = -1; }
    } while (j > 0);

    if ((x < 0) && !(y < 0)) { return negate(i); }
    else if (!(x < 0) && (y < 0)) { return negate(i); }
    else { return i; }
}

// x: base
// y: power
function exponent(x: number, y: number) {
    let result = x;

    // Handling for 0 case
    if (x == 0) { return 0; }
    else if (y == 0) { return 1; }
    // Handling for power of 1 case
    else if (y == 1) { return x; }

    while (y > 1) {
        result = multiply(result, x);
        y--;
    }
    
    return result;
}

function negate(num: number) {
    return -num;
}

function calculate(x: number, y: number, z: string) {
    let result = 0;

    if (z == "+") { result = add(x, y); }
    else if (z == "-") { result = subtract(x, y); }
    else if (z == "*") { result = multiply(x, y); }
    else if (z == "/") { result = divide(x, y); }
    else if (z == "^") { result = exponent(x, y); }
    else { console.log("Invalid operation."); }

    console.log(x + " " + z + " " + y + " is equal to: " + result + ".");
}