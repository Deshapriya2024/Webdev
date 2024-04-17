console.log("Hello Visters , Wellcome To My page");
alert("Wellcome to my page .. pleage wait Page is loading.")
// console.dir(document.body);
// console.log(document.body);

//DOM Manipulation

//Selecting with ID.
let heading=document.getElementById("heading"); // h1
console.dir(heading); 

//selecting with class name
let headings=document.getElementsByClassName("colo");
console.log(headings);
console.dir(headings);

//selecting with tag
let Para=document.getElementsByTagName("p");
console.log(Para);
console.dir(Para);

//selecting by quesry selector
let element=document.querySelector("p") // return the first value .
console.dir(element);

let elements=document.querySelectorAll("p") // all elemnets (node list)
console.dir(elements);

//properties
let divs=document.querySelectorAll("div");
console.dir(divs);