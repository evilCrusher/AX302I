var c = document.getElementById('myCanvas');
var ctx = c.getContext("2d");
ctx.moveTo(0,10);
ctx.lineTo(110,50);
ctx.moveTo(90,50);
ctx.lineTo(210,10);
ctx.moveTo(190,10);
ctx.lineTo(300,50);
ctx.strokeStyle = "blue";
// "strokeStyle" means the colour of the line
ctx.lineWidth = 8;
// "lineWidth" means the thickness of the line
ctx.stroke();
ctx.fillStyle = 'rgb(200,50,10)'
// colour of the rectangle
ctx.fillRect(75,125,150,100);
// fillRect(x(of the top left corner),y(of the top left corner),width,height)
ctx.strokeStyle = "green";
ctx.strokeRect(50,100,200,150);
ctx.clearRect(125, 150, 50, 50);
// clear the rectangle

var d = document.getElementById('canvas2');
var dtx = d.getContext("2d");
dtx.fillStyle = "rgb(0,225,225)";
dtx.fillRect(0,0,150,150);
dtx.fillRect(150,150,150,150);