//MAP METHOD   //it creates new arr
// let  nums=[65,66,95];
// nums.map((val)=>{
//  console.log(val);
// })
// we can write these also
// let  number=[65,66,95];
// let printval=(val)=>{
//      console.log(val);
// }
// number.map(printval);
// let  n=[1,2,3,4];
// let newarr=n.map((val)=>{ 
// return val *2;
// })
// console.log(newarr);
//FILTER METHOD
// let arr=[1,2,3,4,5,6,7];
// let evenarr=arr.filter((val)=>{
//      return val %2==0;
// })
// console.log(evenarr);
// console.log(arr);
//REDUCE METHOD
// let arrr=[1,2,3,4];
// const output =arrr.reduce((prev,cur)=>{
//         return prev+cur;
// })
// console.log(output);
//for finding largest number
let arrr=[1,2,3,4];
const output =arrr.reduce((prev,cur)=>{
        return prev > cur ? prev : cur;
       } )

console.log(output);
