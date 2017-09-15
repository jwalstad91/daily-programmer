`
# 332 - Sum of Digits
https://www.reddit.com/r/dailyprogrammer/comments/6zvjre/20170913_challenge_331_intermediate_sum_of_digits/
`

// [base, power]
let inputs = [[2, 4]];
//, [2, 1234], [11, 4000], [50, 3000]];

inputs.forEach(element => {
    let result = sumOfDigits(element);
    console.log(result);
});

function sumOfDigits(element: number[]) {
    let digits = [];
    let result = 0;

    let str = (element[0] ** element[1]).toString();
    let temp = str.split("");

    for (let i = 0; i < temp.length; i++) {
        digits.push(parseInt(temp[i]));
    }

    digits.forEach(digit => {
        result += digit;
    });

    return result;
}