$(document).ready(function(){
	drawGrid();
	var currentGridSize = 16;
});

function hoverColor(){
	$(".grid").mouseenter(function(){
		var colorR = Math.floor((Math.random() * 256));
		var colorG = Math.floor((Math.random() * 256));
		var colorB = Math.floor((Math.random() * 256));
		$(this).css("background-color","rgb(" + colorR + "," + colorG + "," + colorB + ")");
	})
};

function changeGrid(){
	Size = Math.floor(prompt("Change Grid Size (default is 16x16, max size: 64 x 64): "));
	if(Size > 64){
		Size = 16;
	} else if(!Size) {
		Size = 16;
	}
	$("#wrapper").empty();
	drawGrid(Size);
}

function drawGrid(Size = 16){
	var wrapperSize = 512;
	var output = document.getElementById("wrapper")
	for(i = 0; i < Size * Size; i++){
		var grid = document.createElement("div");
		grid.setAttribute("class","grid");
		output.appendChild(grid);
	};
	$(".grid").css("width",wrapperSize / Size);
	$(".grid").css("height",wrapperSize / Size);
	currentGridSize = Size;
	hoverColor();
};

function clearGrid(){
	$("#wrapper").empty();
	drawGrid(currentGridSize);
}