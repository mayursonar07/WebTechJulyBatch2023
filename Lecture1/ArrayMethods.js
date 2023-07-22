

const fruits = ['Apple', 'Orange', 'Banana', 'Mango'];
const nums = [2, 4,65, 78, 09];

const nums2 = doSomeOperationOnArray(nums);

console.log("nums2: ", nums2);

function doSomeOperationOnArray(fn, nums) {
    const na = [];
    for(let i = 0; i<nums.length; i++){
        let number = fn(num[i]);
        na.push(number);
    }
    return na;
}

const nums3 = nums.map((element)=>{
    return element*2;
})

console.log("nums3 :", nums3);

const nums4 = nums.filter((element)=>{
    if(element === 65) return element;
})
console.log("nums4 :", nums4);

function suffix(fruitsArr) {
    
    // We have fruitsArr as an array
    // 1. I want to make some common treatment on each element of array
    // 2. return it as a new array
    // const newArr = []
    // fruitsArr.forEach((element)=>{
    //     newArr.push(element+"_fruit");
    // });
    // return newArr;
    
    const newArry = fruitsArr.map((element)=>{
         element+"_fruit";
    })

    const filterArray = fruitsArr.filter((element)=>{
        if(element === 'Banana' || element === 'Mango') {
            //return element;
        }
    })
    // return filterArray;

    return newArry;
}


const rv = suffix(fruits);

console.log(fruits);
console.log(rv);




