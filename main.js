console.log("test");

var input = document.getElementById("input");
var height = document.getElementById("height");
var submit = document.getElementById("submit").addEventListener("click", hitSubmit);
var clear = document.getElementById("clear").addEventListener('click', startOver);

function heightNum (heightAsInt){
	var heightNum = parseInt(height);
};

function tree (growTree){
	for (var i = 0; i < height.length; i++) {
	input[i]}
	console.log(input.value += height.value);
};

function startOver (eraseText){
	document.getElementById("input").value = " ";
	document.getElementById("height").value =" ";
}

// if (input === " , " || height === ", "){
// 	alert("Both Fields Must be Complete!");
// } else (console.log(tree))


function hitSubmit () {
	if(input === ', '){
		alert("Value for input neeeded")
	} else if (height == " "){
		alert("Value for height needed")
	} else if (input == " " && height == " "){
		alert("Both fields must be complete")
	} else (console.log(tree))
};