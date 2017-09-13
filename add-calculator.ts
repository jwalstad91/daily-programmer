// TODO
    // cleanup
    // 0 cases
    // negative cases
    // handling for non integral answer

let inputs = ['12 + 25',
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
            '10 ^ -3'];
let input = "-12 * -9";
let parsedInput = input.split(" ");
let x = parseInt(parsedInput[0]);
let y = parseInt(parsedInput[2]);
let z = parsedInput[1];
calculate(x, y, z);

function add(x: number, y: number) {
    return x + y;
}

function subtract(x: number, y: number) {
    if (x >= y) {
        y = negate(y);
    }
    else {
        x = negate(x);
    }

    return add(x, y);
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

function divide(x: number, y: number) {
    let i = 0; // quotient
    let j = x; // dividend 
    // y is divisor

    do {
        // Will not handle remainders; divides up to the nearest whole integer
        if (j >= y) {
            j = subtract(j, y);
            i++;
        }
        else { j = -1; }
    } while (j > 0);

    return i;
}

// x is equal to a base value
// y is equal to a power to raise x by
function exponent(x: number, y: number) {
    let result = 0;

    // 0 case
    if (x == 0) { return 0; }
    else if (y == 0) { return 1; }

    for (let i = 0; i < y; i++) {
        for (let j = 0; j < i; j++) {
            
        }
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

    console.log(result);
}