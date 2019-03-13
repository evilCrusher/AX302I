var c = document.getElementById('myCanvas');
var ctx = c.getContext("2d");

// Sprites Loading

var hulk = new Image();
var im = new Image();
var thor = new Image();
hulk.src = "hulk.png";
im.src = "Iron_Man.png";
thor.src = "thor.png";
// Draw our sprite

im.onload = function(){
	// onload means when the page loads
	ctx.drawImage(im,570,250,180,200);
	//(the image,x,y,width,height)
}
hulk.onload = function(){
	ctx.drawImage(hulk,350,250,170,190);
}
thor.onload = function(){
	ctx.drawImage(thor,100,250,170,180);
}


// Skies and land
ctx.fillStyle = "sandybrown";
ctx.fillRect(0,380,800,150);
ctx.fillStyle = "midnightblue";
ctx.fillRect(0,0,800,380);

// Moon
ctx.beginPath();
ctx.arc(100,100,50,0,6.28);
// arc=circle, ctx.arc(x,y,radius,start angle, end angle)
ctx.closePath();
ctx.fillStyle = "yellow";
ctx.fill();