
let myImage = document.querySelector('img'); 

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc == 'Week10images/TheMedium1.png'){
		myImage.setAttribute('src', 'Week10images/TheMedium2.png');
	} else {
		myImage.setAttribute('src', 'Week10images/TheMedium3.png');
	}
}

//https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics