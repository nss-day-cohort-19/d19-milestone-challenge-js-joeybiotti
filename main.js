console.log("test");

var input = document.getElementById("input");
var height = document.getElementById("height");
var submit = document.getElementById("submit").addEventListener("click", treeSeed);
var clear = document.getElementById("clear").addEventListener('click', startOver);

function heightNum (heightAsInt){
	var heightNum = parseInt(height);
};

function treeSeed (whatever){
	console.log(input.value += height.value);
};

function startOver (eraseText){
	document.getElementById("input").value = " ";
	document.getElementById("height").value =" ";
}

function tree (growTree){

};

if (input === " , "){
	alert("Both Fields Must be Complete!");
} else (height === " , ")
	alert("Both Fields Must be Complete!");
