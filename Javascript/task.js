// TASK-1 FOR APRIL 16 
//======================


//Question -1 
let arr1=[3,6,12,28,9,2,19];

//find sum of the above array
let Sum=0;
for(let i of arr1){
    Sum+=i;
}
console.log("Sum is",Sum);

//Find Smallest element
let min=arr1[0];
for(let i of arr1){
    if(i<min){
        min=i;
    }
}
console.log("Lasrgest element",min);

//Find largest element
let max=arr1[0];
for(let i of arr1){
    if(i>max){
        max=i;
    }
}
console.log("Lasrgest element",max);

//ascending order
console.log("Unshorted array",arr1);
arr1.sort((a,b)=>a-b);
console.log("Arra in ascending order",arr1);

//descending order
console.log("Unshorted array",arr1);
arr1.sort((a,b)=>b-a);
console.log("Arra in decending order",arr1);




//Questoion-2: Remove duplicate value form an array

//Method 1 : convert the array into set then again convert the set back into an array.
let arr2 = [1, 2, 55, 7, 8, 2, 12, 7, 4, 2];

let narr= new Set(arr2) // convert into set because set contains unque values so the duplicate values are automatically removed.

console.log(narr) // print in set 
//now we convert into in array

let nArray=Array.from(narr); // convert set into array

console.log(nArray);



//Method -2 : use spread method
let NewArray = [...new Set(arr2)];
console.log(NewArray);