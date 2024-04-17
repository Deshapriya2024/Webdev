//event handle for btn1

// let btn1=document.querySelector("#btn1");

// btn1.ondblclick=()=> {
//     console.log("clicked by doubleclick");
//     let a=25;
//     a++;
//     console.log(a);
// }



//event handle for btn2
let btn2=document.querySelector("#btn2");

btn2.onclick=()=> {
    console.log("clicked");
    let a=25;
    a++;
    console.log(a);
}



//event handling for div
let box=document.querySelector("#box");

box.onmouseover=()=> {
    console.log("you iside the div ");
}



//Event Object
let btn3=document.querySelector("#btn3");

btn3.onclick=(e)=> {
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX);
    console.log(e.clientY);
} 


//event handle for btn1 by Event listener

let btn1=document.querySelector("#btn1");

btn1.addEventListener("click", () => {
    console.log("Hello i am added by event listener");
});

btn1.addEventListener("click", () => {
    console.log("I am second handler");
});

const eventhandler3=()=> {
    console.log("i am event handler 3 ");
}

btn1.addEventListener("clcik",eventhandler3);


//remove event handler
btn1.removeEventListener("click",eventhandler3);