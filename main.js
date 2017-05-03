var heightInput = document.getElementById("height");
var userInput = document.getElementById("input");
var submitBtn = document.getElementById("submit");
var clearBtn = document.getElementById("clear");

//button event / key up events

submitBtn.addEventListener("click", grow);
heightInput.addEventListener("keyup", hitEnter);
userInput.addEventListener("keyup", hitEnter);
clearBtn.addEventListener("click", erase);

//grow tree function

function grow (event){
		var height = heightInput.value;
		var character = userInput.value;
		console.log(" ".repeat(height) + character);
		for (var i = 1; i <= height.length; i++) {
			console.log(" ".repeat(height - i) + " " + character.repeat(i + 1)) * (" ".repeat(height - i) + " "+ character.repeat(i + 1));

		}
}

//clear function - function also works as keyup if user last clicked on clear- works for me.

function erase(event){
	document.getElementById("input").value=" ";
	document.getElementById("height").value=" ";
	console.log("clear cut the forest and build a subdivision");
};

//key up event function

function hitEnter (event){
	if(event.which === 13){
		(grow)
	}else{
		(blankSpaces)
	}
}

//check if fields are blank
	function blankSpaces(event){
		if(heightInput.value===" " || userInput.value===" "){
			alert("Both fields need value!")
		}else{
			(grow)
		}
	};