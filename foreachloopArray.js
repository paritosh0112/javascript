// let arr=[1,2,3,4,5];
// arr.forEach(function printval(val){     // val means each value at each index will print
//  console.log(val);


// })
//in arrow function 
// let arr=[1,2,3,4,5];
// arr.forEach( (val)=>{    // val means each value at each index will print
//  console.log(val);


// })
// cities name in array
let arr=["delhi","mumbai","punjab"];
arr.forEach( (val,idx,arr)=>{    // val means each value at each index will print
 console.log(val.toUpperCase(),idx,arr);


})