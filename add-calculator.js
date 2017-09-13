// TODO
// cleanup
// 0 cases
// negative cases
// handling for non integral answer
var inputs = ['12 + 25',
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
inputs.forEach(function (element) {
    var parsedInput = element.split(" ");
    var x = parseInt(parsedInput[0]);
    var y = parseInt(parsedInput[2]);
    var z = parsedInput[1];
    calculate(x, y, z);
});
function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return add(x, negate(y));
}
function multiply(x, y) {
    var result = 0;
    var i = y;
    // Resolve negative operand
    if (y < 0) {
        i = negate(y);
    }
    // Check for case 0
    if (x == 0 || y == 0) {
        return result;
    }
    for (var j = 0; j < i; j++) {
        result += x;
    }
    // Ensure proper sign is applied to result
    if ((x < 0) && (y < 0)) {
        result = negate(result);
    }
    else if (y < 0) {
        result = negate(result);
    }
    return result;
}
function divide(x, y) {
    var i = 0; // quotient
    var j = x; // dividend
    var k = y; // divisor
    if (x < 0) {
        j = negate(x);
    }
    if (y < 0) {
        k = negate(y);
    }
    // Handle division by 0
    if ((x == 0) || y == 0) {
        return undefined;
    }
    do {
        // Will not handle remainders; divides up to the nearest whole integer
        if (j >= k) {
            j = subtract(j, k);
            i++;
        }
        else {
            j = -1;
        }
    } while (j > 0);
    if ((x < 0) && !(y < 0)) {
        return negate(i);
    }
    else if (!(x < 0) && (y < 0)) {
        return negate(i);
    }
    else {
        return i;
    }
}
// x: base
// y: power
function exponent(x, y) {
    // Handling for 0 case
    if (x == 0) {
        return 0;
    }
    else if (y == 0) {
        return 1;
    }
    if (y == 1) {
        return x;
    }
    for (var i = 0; i < y; i++) {
        x = multiply(x, y);
    }
    return x;
}
function negate(num) {
    return -num;
}
function calculate(x, y, z) {
    var result = 0;
    if (z == "+") {
        result = add(x, y);
    }
    else if (z == "-") {
        result = subtract(x, y);
    }
    else if (z == "*") {
        result = multiply(x, y);
    }
    else if (z == "/") {
        result = divide(x, y);
    }
    else if (z == "^") {
        result = exponent(x, y);
    }
    else {
        console.log("Invalid operation.");
    }
    console.log(x + " " + z + " " + y + " is equal to: " + result + ".");
}
