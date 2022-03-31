console.log("DON'T CLICK!");

// an empty array to keep track of clicks??!!!!
let theEmptyArray = [];
let theBody = document.querySelector("body");
const myButton = document.getElementById("theButton");

myButton.addEventListener('click', magicClick)

function magicClick(){
    console.log("you clicked!")
    theBody.style.backgroundColor = "black";
    theBody.style.color = "white"; 
    myButton.style.backgroundColor = "black"; 
    document.querySelector("h3").textContent = "WHY DID YOU CLICK?!"
}

//function setIntput(){
    //myButton.style.visibility = "hidden"; 
    //}

