//Attribute value (get and set)
/*let div=document.querySelector("div");
console.log(div);

let id=div.getAttribute("id");
console.log(id);



let para=document.querySelector("p");
console.log(para.getAttribute("class"));
console.log(para.setAttribute("class","new class"));*/


//special attribute for get style of a node 
// let div=document.querySelector("div");
// console.log(div.style);
// div.style.backgroundColor="green";


//insert Element (first b reate an element then add)
let newBtn=document.createElement("button");
newBtn.innerText="Cick Me";
console.log(newBtn);

//add at the end insdie the div
// let div=document.querySelector("div");
// div.append(newBtn);


// //add at the start insdie the div
// let div=document.querySelector("div");
// div.prepend(newBtn);


//add before the node outside the div
// let div=document.querySelector("div");
// div.before(newBtn);


//add at the end outside the div
let div=document.querySelector("div");
div.after(newBtn);


//remove a node
let para=document.querySelector("p");
para.remove()