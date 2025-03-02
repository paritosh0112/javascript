//arrays
// let marks=[95,56,77,88,65]
// console.log(marks);
// console.log(marks.length);//property gives an value
// let heroes=["ironman","ranveer","spiderman","thor","hulk"];
// console.log(heroes.length);
// console.log(typeof (heroes));
// console.log(marks[0]);
// marks[3]=90;
// console.log(marks);
//LOOPING AN ARRRAY
// let heroes=["ironman","ranveer","spiderman","thor","hulk","kapoor"];
// for (let idx=0; idx<heroes.length; idx++){
//     console.log(heroes[idx]);
// }
// let cities =["mumbai","haryana","delhi","banswara","dungarpur"];
// for(city of cities){
//     console.log(city);
// }

//array methods
// let arr=[1,2,3,4,5];
// console.log(arr.push(6));    //push used for add any item at the end of the array
// console.log(arr);
// console.log(arr.pop()); // pop used for deleting last value from array
// console.log(arr);

// let fooditems=["potato","apple","litchi","tomato"];
// console.log(fooditems);
// console.log(fooditems.toString());

// let paritosh=[1,2,3,4,5];
// let niket=[6,7,8,9,10];
// concat=paritosh.concat(niket);
// console.log(concat);

// let heroes=["ironman","ranveer","spiderman","thor","hulk","kapoor"];
// console.log(heroes.unshift("paritosh","niket")); // unshift add item at start of arrray same work like push and shift is like pop delete item from start
// console.log(heroes);

//slice method (returns a piece of code) not change in original array
// let heroes=["ironman","ranveer","spiderman","thor","hulk","kapoor"];
// console.log(heroes.slice(1,4)); //last index in not enclosive
//splice method changes original array (add remove replace)
let numbers=[1,2,3,4,5];
// console.log(numbers.splice(1,2,101,105));
// console.log(numbers);
// console.log(numbers.splice(4,0,666)); //add element
// console.log(numbers);

//for delete
// console.log(numbers.splice(3,1));
// console.log(numbers);
//for replace
console.log(numbers.splice(3,1,101));
console.log(numbers);
 

