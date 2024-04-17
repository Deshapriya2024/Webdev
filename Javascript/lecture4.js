//Array
let marks=[97,88,78,96,99];
console.log(marks);
console.log(marks.length);
console.log(typeof marks);
console.log(marks[2]);
marks[2]=66;
console.log(marks);

//using for loop

for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
}

//print an array using for-of loop
let city=["mumbai","chandigarh","gurgaon"];
for(let i of city){
    console.log(i);
    console.log(i.toUpperCase());
}


//practice question
//Qs1- for a given array with marks of students [85,97,44,37,76,60] find the avg mark of the students.
let stdMark=[85,97,44,37,76,60];
let Sum=0;
for(let i of stdMark){
    // console.log(i);
    Sum=Sum+i;
}
console.log(Sum);
let avgmark=Sum/stdMark.length;
console.log(`avg mark of student is =${avgmark}`);

//Qs-2:for  a given array with prices of 5 items --> [250,645,300,900,50] all items have an offer of 10% off in them . change the array to store final price aftere applying offer.

let price=[250,645,300,900,50];

let Offer;
for(let i=0;i<price.length;i++){
   console.log(` Price Before applying offer at index ${i} = ${price[i]}`);
   Offer=price[i]/10;
   price[i]=price[i]-Offer;
   console.log(` Price After applying offer at index ${i} = ${price[i]}`);
  
}
console.log(price);



//Array methods
let vegies=["potato","mango","tomato"];

vegies.push("burger","psneer","chips");

console.log(vegies);
let deledVegies=vegies.pop(); // store th deleted items
console.log(vegies);
console.log("Deleted items from Vegies List=",deledVegies);


//Array into converts
console.log(vegies.toString());
console.log(typeof vegies);


//concat() method
let arr1=["Apple","Ball","cat"];
let arr2=["mango","hill","fan"];
let arr3=arr1.concat(arr2);
console.log(arr3);
arr3.unshift("Hari");
console.log(arr3);
arr3.shift();
console.log(arr3);
console.log(arr3.slice(2,5));
arr3.splice(2,3);
console.log(arr3);


//PRactice qs -: create an company--> "blogger","microsoft","airtel","google","ibm"

let companies=["bloomberg","microsoft","uber","google","ibm","netflix"];

//remove the first company
companies.shift();
console.log("After remove the first comapny from the arrya",companies);

//remove uber and add ola to its place
companies.splice(2,1,"ola");
console.log("remove uber and add ola to its place",companies);

//add amazon at the end
companies.push("Amazon");
console.log("After add amazon at the end",companies);