const arr1 = ["a", "b", "r", "m"];

arr1.sort();

console.log(arr1);

// Numbers array
const nums = [123, 321, 3, 212, 24, 52];
nums.sort();
console.log(nums);

// Objects array // Array of objects

const objsArr = [{}, {}, {}, {}]

// sample Object
const address1 = {
    street: "main street",
    building: "pentagon",
    state: "Texas",
    details: {
        buildingNumber: 343
    }
}

const address2 = {
    street: "main street 2",
    building: "pentagon 2",
    state: "Texas 2"
}

const listOfAddress = [address1, address2];

const listOfBankDetails = [
    {bank: "Bank of America", accountNum: 324124, accountName: "Mayur"}, 
    {bank: "Bank of America", accountNum: 534553, accountName: "Lia"}, 
    {bank: "Bank of Colorado", accountNum: 747456, accountName: "Mariam"}
]

// Since Array can be collection of anything..!!
// The sorting method in array will by default take care of only characters/strings.
// But if you put any other type in array, then you will have to take care of sorting that type

// How do we take care of that sorting logic for different types of data
// like Numbers, objects, etc.

// Its very easy...and you need to do almost same treatment everytime.

// Sort method accepts a sorting function where you can write your logic
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// Suppose we want to sort numbers
const nums2 = [123, 321, 3, 212, 24, 52];
nums2.sort(comparefn_ascending);

// This compare function should have the logic
function comparefn_ascending (x, y) {
    if (x > y) {
        return 1;
    } else if (x < y) {
        return -1;
    } else return 0;
}
function comparefn_descending (x, y) {
    if (x > y) {
        return -1;
    } else if (x < y) {
        return 1;
    } else return 0;
}
console.log("nums2 :", nums2);

const nums3 = [1.1, 1.6, 1.3, 1.19, 1.006]
nums3.sort(comparefn_descending);
console.log("nums3 :", nums3);


// Now, How do we sort Objects
const listOfBankDetails2 = [
    {bank: "Bank of America", accountNum: 324124, accountName: "Mayur", bankAddress: { streetName: "bank road", buildingNumber: 23}}, 
    {bank: "Bank of America", accountNum: 534553, accountName: "Lia", bankAddress: { streetName: "bank road", buildingNumber: 523}}, 
    {bank: "Bank of Colorado", accountNum: 747456, accountName: "Mariam", bankAddress: { streetName: "bank road", buildingNumber: 421}}
]
// Incase of objects, your x and y will be the complete object
// a: {bank: "Bank of America", accountNum: 324124, accountName: "Mayur", bankAddress: { streetName: "bank road", buildingNumber: 23}}
// b: {bank: "Bank of America", accountNum: 534553, accountName: "Lia", bankAddress: { streetName: "bank road", buildingNumber: 523}}
function comparefn_objects (a, b) {
    // Suppose, you decide of compare 'accountNum' field for sorting
    // You just need to make small change in below logic
    if (a.bankAddress.buildingNumber > b.bankAddress.buildingNumber) {
        return -1;
    } else if (a.bankAddress.buildingNumber < b.bankAddress.buildingNumber) {
        return 1;
    } else return 0;
}
listOfBankDetails2.sort(comparefn_objects);
console.log("listOfBankDetails2: ", listOfBankDetails2)


