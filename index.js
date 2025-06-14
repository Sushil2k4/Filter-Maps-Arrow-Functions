// ========================
// MAP FUNCTION EXAMPLES
// ========================

// map() is used to transform every element of an array.
// It returns a **new array** with the same length.
// It does NOT modify the original array.




//......
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ans = input.map(function (element) {
    return element * 2; // double each number
});
console.log(ans); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// Custom reusable version of map
const CustomMap = (arr, transformFnc) => arr.map(transformFnc);
const output = CustomMap(input, x => x * 5); // arrow function that multiplies by 5
console.log(output); // [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

// ========================
// FILTER FUNCTION EXAMPLES
// ========================

// filter() is used to select elements based on a condition.
// It returns a **new array** with only those elements that return true in the condition.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        newArr.push(arr[i]); // filter even numbers manually
    }
}
console.log(newArr); // [2, 4, 6, 8, 10]

// Same logic using filter()
function filterLogic(n) {
    return n % 2 == 0;
}
const ans1 = arr.filter(filterLogic);
console.log(ans1); // [2, 4, 6, 8, 10]

// ========================
// FILTER EXAMPLE - STRINGS
// ========================

const arr2 = ["sushil", "yuvraj", "patrick", "nobita", "jethalal"];

const ans2 = arr2.filter(function (n) {
    if (n.startsWith("s") || n.startsWith("j")) {
        return true;
    } else {
        return false;
    }
});
console.log(ans2); // ["sushil", "jethalal"]

// Same logic with arrow function
const ans3 = arr2.filter((n) => {
    return n.startsWith("s") || n.startsWith("j");
});
console.log(ans3); // ["sushil", "jethalal"]

// ========================
// ARROW FUNCTIONS THEORY
// ========================

// Arrow functions are a shorter way to write functions.
// Syntax: (params) => { return ... }
// Use it when you don't need 'this', 'arguments', or function keyword.

// Example:
const double = x => x * 2;
console.log(double(5)); // 10

// Works great with map, filter, reduce, etc.

// ========================
// THEORY SUMMARY
// ========================

// 🔹 map():
// - Transforms each element
// - Returns new array
// - Syntax: arr.map((el) => ...)
// - Example: [1, 2, 3].map(x => x * 2) → [2, 4, 6]

// 🔹 filter():
// - Selects elements that satisfy a condition
// - Returns new array
// - Syntax: arr.filter((el) => condition)
// - Example: [1, 2, 3, 4].filter(x => x % 2 === 0) → [2, 4]

// 🔹 arrow functions:
// - Shorthand function syntax
// - const func = (x) => x + 1;
// - Great for one-liners and array methods

// ✅ map → transforms
// ✅ filter → selects
// ✅ arrow → short, clean functions
