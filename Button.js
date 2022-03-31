console.log("DON'T CLICK!");

// an empty array to keep track of clicks??!!!!
let theEmptyArray = [];
let theBody = document.querySelector("body");
const myButton = document.getElementById("theButton");

myButton.addEventListener('click', magicClick)

//const link = document.createElement('a');
//link.id = 'scary'; 
//link.href = 'https://media.giphy.com/media/5oWpOD8Thsmo8/giphy.gif'; 
//document.getElementById('scary').click();

function magicClick(){
    console.log("you clicked!")
    theBody.style.backgroundColor = "black";
    theBody.style.color = "white"; 
    myButton.style.backgroundColor = "black"; 
    document.querySelector("h3").textContent = "WHY DID YOU CLICK?!"
    //theButton.style.visibility = 'none'; 
    //string.link("https://media.giphy.com/media/5oWpOD8Thsmo8/giphy.gif")
}





//https://www.codegrepper.com/code-examples/javascript/how+to+add+link+in+javascript