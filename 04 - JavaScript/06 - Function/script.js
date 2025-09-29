// function areaOfRectangle(length, width) {
//     let area = length * width;
//     return area;
// }

// let l = prompt("Enter the length of the rectangle:");
// let w = prompt("Enter the width of the rectangle:");
// let area = areaOfRectangle(l, w);
// alert("The area of the rectangle is: " + area);

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

let num = prompt("Enter a number to calculate its factorial:");
let result = factorial(num);
alert("The factorial of " + num + " is: " + result);