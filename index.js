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
