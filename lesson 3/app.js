// Drawing a circle
var c = document.getElementById('myCanvas');
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(150,150,120,0,6.28);
// arc=circle, ctx.arc(x,y,radius,start angle, end angle)
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "cyan";
ctx.fill();

// Drawing a green triangle
var c1 = document.getElementById('myCanvas1');
var ctx1 = c1.getContext("2d");
ctx1.beginPath();
ctx1.strokeStyle = "lime";
// lime is a kind of green
ctx1.moveTo(150,25);
ctx1.lineTo(225,150);
ctx1.lineTo(75,150);
ctx1.closePath();
ctx1.stroke();
ctx1.fillStyle = "green";
ctx1.fill();

// Drawing a red diamond
var c2 = document.getElementById('myCanvas2');
var ctx2 = c2.getContext("2d");
ctx2.beginPath();
ctx2.moveTo(150,25);
ctx2.lineTo(225,150);
ctx2.lineTo(150,275);
ctx2.lineTo(75,150);
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle = "red";
ctx2.fill();