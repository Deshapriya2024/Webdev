// This code is print "This is lecture2 of java script"

console.log("This is lecture2 of java script");

/* The above code print " This is lecture 2 of javascript " 
 on our console window .*/

 // ARITHMETIC OPERATOR
 console.log("Arithmetic operator");

 let a=12;
 let b=4;

 console.log("a=",a,"b=",b);
 console.log("a+b=",a+b);
 console.log("a-b=",a-b);
 console.log("a*b=",a*b);
 console.log("a/b=",a/b);
 console.log("a%b=",a%b);
 console.log("a**b=",a**b); // 20^4 = 20736

 // UNARY OPERATOR
 console.log("Unary Operator");
 
 let c=4;
 let d=11;

 // for increment
 console.log("c=",c,"d=",d);
 console.log("c++=",c++); // post increment ->first print then increment
 console.log("c=",c) 

 console.log("++d=",++d); // pree increment ->first increment then print
 console.log("d=",d) 

// for decrement
 console.log("c=",c,"d=",d);
 console.log("c--=",c--); // post decrement ->first print then decrement
 console.log("c=",c) 

 console.log("--d=",--d); // pree decrement ->first decrement then print
 console.log("d=",d) 

 //ASSIGNMENT OPERATOR
 console.log("Assignment Opeartor");
 let e=10;

 console.log("e=",e);
 console.log("e+=",e+=1);
 console.log("e-=",e-=1);
 console.log("e*=",e*=1);
 console.log("e%=",e%=1);
 console.log("e**=",e**=1);

//COMPARISION OPERATOR

//Ex-1
let f=2;
let g=3;

console.log("f=",f , "g=",g);
console.log("2==3",f==g);  // false
console.log("2==3",f!=g);  //true

//Ex-2
let i=5;
let j="5";
console.log("i=",i, "j=",j);
console.log("The type of i is ",typeof(i));
console.log("The type of j is ",typeof(j));
console.log("5=='5'=",i==j); //true
console.log("5!='5'=",i!=j); //true

//Ex-3
console.log("i=",i, "j=",j);
console.log("The type of i is ",typeof(i));
console.log("The type of j is ",typeof(j));
console.log("5==='5'->",i===j); //false
console.log("5!=='5'->",i!==j); //true

//Ex-4
let k=5;
let l=4
console.log("k=",k, "l=",l);
console.log("5<4->",k<l); //false
console.log("5>4->",k>l); //true
console.log("5<=4->",k<=l); //false
console.log("5>=4->",k>=l); //true

// LOGICAL OPERATOR
console.log("k=",k, "l=",l);
let cond1=k<l;
let cond2=k>l;
console.log("cond1 is",cond1);
console.log("cond2 is",cond2);
console.log(cond1 && cond2); 
console.log(cond1 || cond2);
console.log(!(cond1));  



//CONDITIONAL STATEMENT
let age=26;
console.log("Age is ",age);

if (age>18) {
    console.log("You can vote");
}
else{
    console.log("You acan not vote")
}


// chcek num is odd or even
let num=10;
 if (a%2==0){
    console.log("even");
 }
 else{
    console.log("odd");
 }


 //check else-if
console.log("num is",num); 
if(num>=10){
    console.log("Allowed in class");
}

else if(num<10){
    console.log("Allowed in class");
}
else{
    console.log("Clas off");
}


//TERNARY OPERATOR
let Age=25;
let result= Age>=18?"Adult":"Not Adult";
console.log("result is ", result);

