//
// Copying Arrays
//
let arr1 = ["Apple", "Banana"];
const arr2 = ["Oranges", "Kiwi", "Banana"];

// Question: copy all elements from arr2 to arr1
//
arr1.concat(arr2);
console.log("arr1: ", arr1);
// Here, we do not get all elements of arr2 in arr1

const arr3 = arr1.concat(arr2);
console.log("arr3: ", arr3);

// But I want to 
// arr1 = arr1.concat(arr2);
// console.log("arr1: ", arr1);

// Another way is
arr1 = [...arr1, ...arr2];
console.log("arr1: ", arr1);



// ==========================================================================
// Homework: Remove duplicates from the below array 
// ==========================================================================
const nums = [1, 4, 2, 4, 8];
const fruits = ["Oranges", "Kiwi", "Banana", "Kiwi"];
const listOfBankDetails = [
    {bank: "Bank of America", accountNum: 324124, accountName: "Mayur"}, 
    {bank: "Bank of America", accountNum: 534553, accountName: "Lia"}, 
    {bank: "Bank of Colorado", accountNum: 747456, accountName: "Mariam"},
    {bank: "Bank of America", accountNum: 534553, accountName: "Lia"}
]


