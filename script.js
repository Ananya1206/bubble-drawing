let r=225;
let g=225;
let b=225;
let diameter=30;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
}

function draw() {
  circle(mouseX,mouseY,diameter);
  noStroke();
  fill(r,g,b,10);
}
function mousePressed(){
  r=random(100,225);
  g=random(100,225);
  b=random(100,225);
  diameter=random(16,64);
}