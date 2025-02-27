let items=[250,645,300,900,50];
let idx=0;
for( let val of items){
    console.log(`value of index &{idx}= ${val}`);
    let offer=val/10;
    items[idx]=items[idx] -offer;
    console.log(`value after offer = ${items[idx]}`);
    idx++;
}