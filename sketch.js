var r = 200;
var g = 500;
var b = 200;


function setup() {
  createCanvas(700, 700);
  
}

function draw() {
  background(r,g,b);
  
  fill(200);
  ellipse(mouseX,mouseY,30,30);
  r = map(mouseX,mouseY,700,0,140);
  g = map(mouseX,mouseY,700,500,200);
  b = map(mouseX,mouseY,700,200,140);
  

}