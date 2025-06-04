//mapssssssssssssssssss
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ans = input.map(function (element) {
    return element*2;
});
console.log(ans);

//short way 

const CustomMap = (arr, transfromFnc) => arr.map(transfromFnc);
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const output = CustomMap(input, x => x * 5);
console.log(output);


//filterssssssssssssssssss

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = [];

for (let i=0; i<arr.length; i++) {
    if (arr[i]%2 == 0) {
        newArr.push(arr[i]);
    }
}

console.log(newArr);

//short way

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterLogic(n) {
    if ( n % 2 == 0 ) {
        return true;
    } else {
        return false;
    }
}

const ans = arr.filter(filterLogic);
console.log(ans);

//another example for filters

const arr = ["sushil", "yuvraj", "patrick", "nobita", "jethalal"];

const ans = arr.filter(function (n) {
    if ( n.startsWith("s") || n.startsWith("j") ) {
        return true;
    } else {
        return false;
    }
});

console.log(ans);
