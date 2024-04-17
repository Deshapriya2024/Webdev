// FUNCTIONS IN JAVASCRIPT

function myFunction(){
    console.log("Hey I am Dehspriya Panigrahi");
    console.log("I am from balsore");
    console.log("Now I Am a trainee at Kreativan technology");

}

myFunction();


//ex-2
function hello(msg){ // parameter --> Input
    console.log(msg);

}

hello("Wellcome to Kreativan technology"); // argument

// funtion --> 2 number sum

/*function sum(a,b){
    let result=a+b
    console.log(`sum of ${a} and ${b} is =`,result)

}
a=prompt("Add the value of a ");
b=prompt("Add the value of b ");
sum(a,b);*/

//function return a value
function sum(a,b){
    //local variabe --> scope
    let result=a+b
    return result;
}
let finalresult=sum(2,4);
console.log(finalresult);


// sum function using arrow function (Arrow functions are in modern javascript)
const arrowsum=(a,b) => {
   console.log(a+b);
};
console.log(arrowsum);
arrowsum(5,6);

// sum function using arrow function (Arrow functions are in modern javascript)
const arrowmul=(a,b) => {
    console.log(a*b);
 };
 console.log(arrowmul);
 arrowmul(5,6);


//practicequestion- create a function using "function" keyword that take a string as an argument  & return the number of vowels in the string .

function Myvowel(str){
    // " Deshapriya" count=0
    let count1=0;
    for(let i of str){
        if(i=="a" ||i=="e" ||i=="i" ||i=="o" ||i=="u"){
            count1++;
        }
        
    }
    console.log(count1);

}

Myvowel("Deshapriya");

//practicequestion- create a function using "function" keyword that take a string as an argument  & return the number of vowels in the string . SAME TASK  USING ARROW FUNCTION

const Countvowel=(str)=>{
    let count=0;
    for(let i of str){
        if(i=="a" ||i=="e" ||i=="i" ||i=="o" ||i=="u"){
            count++;
        }
        
    }
    console.log(count);
}

console.log(Countvowel);
Countvowel("Panigrahi");




//forEach Loop in Arrays
let arr=["pune","delhi","mumbai"];

arr.forEach((val , idx , arr)=>{
    console.log(`${val} is present at ${idx} index in the string of  ${arr}`);
});



//practice question : - >  for a given array of numbers , print the square of each value using the forEach loop .\

//method-1
let num=[1,2,3];

num.forEach((val)=> {
    console.log(`The square of ${val} is `,val*val);
});

//method-2
console.log("here is the method 2")
let num1=[1,2,3,4,5,6];

function Calsq(digit){
    console.log(`The square of ${digit} is `,digit*digit);
}

num1.forEach(Calsq);


//map in array
let arr5=[2,3,4];
arr5.map((val)=>{
    console.log(val);
})

//create a new array and store the square of arr5
let NweArr=arr5.map((val)=>{
    return val*val;
})
console.log(NweArr);


//Filter in Array
let arr6=[2,4,66,88,54,55];
let Newarr6=arr6.filter((val)=> {
    return val%2==0;
})
console.log(Newarr6);


//Reduce in Array
let arr7=[2,4,6,8];

const Output=arr7.reduce((val,result)=>{
    return val+result;
})
console.log(Output);

//find largest number of an array using reduce method
let arr8=[2,4,6,8];

const max=arr8.reduce((val,result)=>{
    return val<result?result:val;
})
console.log(`the largest number of the arr7 string is ${max}`);

//find Smallest number of an array using reduce method
let arr9=[2,4,6,8];

const min=arr8.reduce((val,result)=>{
    return val>result?result:val;
})
console.log(`the largest number of the arr7 string is ${min}`);

// practice set q-1 :--> we are given an array of marks of student . filter out of the marks of the students  that scored 90+
let SMark=[55,88,98,90,57];
let topper=SMark.filter((val)=>{
    return val>90;
 });
 console.log(topper);

//Prcatice qs-2:-->  take a number n as input from user . create an array of number from 1 to n . use the reduce method to calculate sum of all numbers in the array.use the reduce method to calculate product of all numbers in the array .

let n=prompt("enter a number");

let Ary=[];

for(let i=1;i<=n;i++){
    Ary[i-i]=i;
}
console.log(Ary);

let sumop=Ary.reduce((prev,current)=>{
    return prev+current;
});
console.log(sumop);
let fact=Ary.reduce((prev,current)=>{
    return prev*current;
});
console.log(fact);
