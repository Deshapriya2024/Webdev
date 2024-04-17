//practice set 2
let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + " From apna college";
console.dir(h2.innerText);



//practice set 2
let boxes=document.querySelectorAll(".box");

//printing old value
let index=0;
for(box of boxes){
    console.log(`Old value at index ${index}= ${box.innerText}`);
    index++;
}

//printing updtaed value
let ind=0;
for(box of boxes){
    box.innerText=`new uniques value ${ind}`;
    console.log(`${box.innerText} at ${ind}`);
    ind++;
}