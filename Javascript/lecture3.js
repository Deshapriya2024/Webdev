// print your name 5 times 
for (i=1;i<=5;i++){
    console.log("Desha");
}

// Caluculate sum of 1 to 5 
let sum=0;
for(i=1;i<=5;i++){
    sum=sum+i;
}
console.log("sum is ",sum);


//print 1 to 9
for(i=1;i<10;i++){
    console.log("i=",i);
}

// print 1 to 5 using while loop
let a=1;
while(a<=5){
    console.log("a=",a);
    a++;

}

// print 1 to 5 using do while loop
let b=1;
do{
    console.log("b=",b);
    b++;
}
while(b<=5);


// for-of loop
let str="Deshapriya";

let length=0;
for(let i of str){
    //iterator --> character
    console.log("i=",i);
    length++;
}
console.log("string size =",length);

//for-in loop

let students={
    name:"Rahul",
    age:20,
    cgpa:7,
    ispass:true

}

for(let key in students){
    console.log("key=",key,"value=",students[key]);
}

//practice qs-1 :Print all even number from 0 to 100
let c=0;
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
    else{
        continue;
    }
    }

   
    //Practice qs-2 : 
    /*let gameno=5;
  
    let num=prompt("Enter A number ");

    while(num!=gameno){
        num=prompt("You entered Wrong Number , kindly entered again");
    
    }
    console.log("hey you are successfully completing the game and the number that you entered is =  ",num); */
       
    





    //STRINGS
    let Name="Desha";
    console.log(Name.length);  // length of a str
    console.log(Name[2]); // access perticular position


    //Template Literal
    let SpecialString=`This is a specilal string`;
    console.log(typeof SpecialString);

    //Template Literal using in object

    //ex-1
    let std={
        name:"desha",
        regdno:2001297123,
        cgpa:8
    }

    let result=`${std.name} whose registration number is ${std.regdno} secured ${std.cgpa}cgpa in the last semester .`;
    console.log(result)
    

    //ex-2
    let output=`The sum of 1 and 2 = ${1+2}`;
    console.log(output);
    
    //escape character in string 
    console.log("deshapriya \n Panigrahi");
    console.log("deshapriya \t Panigrahi");
    let op=`Harish\n panda`;
    console.log(op.length);


    //string methods
    //Covert in to upper case
     /*let uper="deshapriya";
    console.log(uper);
    let newstr=uper.toUpperCase();
    console.log(newstr);*/

    //convert into lower case
    /*let uper="DESHAPRIYA";
    console.log(uper);
    let newstr=uper.toLowerCase();
    console.log(newstr); */

    //TRIM METHOD (REMOVED WHITE SPACE FROM STARTS AND ENDS)
    let uper="DESHAPRIYA PANIGRAHI ";
    console.log(uper);
    let newstr=uper.trim();
    console.log(newstr);


    //str.slice(start,end?);
    let number="123456";
    console.log(number.slice(3,5));

    //str1.concat(str2)

    //method-1

    let st1="Deshapriya";
    console.log(st1);
    let str2="Panigrahi";
    console.log(str2);
    op1=st1.concat(str2);
    console.log("After Concat= ",op1);

    //method-2 of string concatination
    console.log("use of the second method=",st1+str2);

    //str.replace(searchval,newval)
    let string1="Deshapriyo"
    console.log(string1.replace("o","a"));
 
    //str.carAt(inx)
    let trial="ILOVEJS";
    console.log(trial.charAt(3));


    //Practice set
    //qs: prompt the user to enter their fullname. Generate a username for them based the input.start username with @ , fo;;owed by their fullname and ending with the fullname length.

    for(let i=1;i<5;i++){
        let FullName=prompt("Enter Your Full Name");
        let UserName="@"+FullName+length.FullName;
        console.log(UserName);
    }

  