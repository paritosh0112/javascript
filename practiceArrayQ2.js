let num = prompt("enter the number");
let arr=[];
let n;
for(let i=1; i<=num;i++){
   arr[i-1]=i;
}
console.log(arr);
let output =arr.reduce((prev,cur)=>{
           return prev+cur;
    })
    console.log(output);
    let out =arr.reduce((prev,cur)=>{
        return prev*cur;
 })
 console.log(out);