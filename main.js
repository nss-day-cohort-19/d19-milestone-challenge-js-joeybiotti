console.log("test");

var input = document.getElementById("input");
var height = document.getElementById("height");
var submit = document.getElementById("submit").addEventListener("click", treeSeed);
var clear = document.getElementById("clear").addEventListener('click', startOver);

function treeSeed (whatever){
	console.log(input.value += height.value);
};

function startOver (terminate){
	document.getElementById("input").reset();
	document.getElementById("height").reset();
}

function tree (growTree){

};

if (input === " , "){
	alert("Both Fields Must be Complete!");
} else (height === " , ")
	alert("Both Fields Must be Complete!");
