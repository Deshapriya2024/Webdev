/* q1- get user to input a number using prompt("Enter a number") . check if the number is multiple of 5 or not . */


/*let num=prompt("Enter a Number :");

if(num % 5 ===0){
console.log(num,"num is multiple of 5");
}
else{
    console.log(num,"num is not a multiple of 5");
} */



/* write a code which can gives grades to students acc to their scores :*/

let score= prompt("Enter Your Mark");

if (score>=90 && score<=100){
    console.log("A grade");
}

else if (score>=70 && score<=89){
    console.log("B grade");
}

else if (score>=60 && score<=69){
    console.log("C grade");
}

else if (score>=50 && score<=59){
    console.log("D grade");
}

else{
    console.log("F grade ! sorry you are fail");
}
