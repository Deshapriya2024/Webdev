let modebtn=document.querySelector("#btn1");
let body=document.querySelector("body");
let CurrentMode="Light";


modebtn.addEventListener("click", () => {
    if (CurrentMode === "light") {
        CurrentMode = "dark";
        body.classList.remove("lightmode"); // Remove existing mode class
        body.classList.add("darkmode");
    } else {
        CurrentMode = "light";
        body.classList.remove("darkmode"); // Remove existing mode class
        body.classList.add("lightmode");
    }
    console.log(CurrentMode);
});

