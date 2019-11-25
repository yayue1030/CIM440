var hit = false;

function setup() {
  // put setup code here
  createCanvas(400,400);
}


function draw() {
   // put drawing code here
   background(255);
   	ellipse(200,200,100,100);
   	point(mouseX,mouseY);

   	hit = collidePointCircle(mouseX,mouseY,200,200,100)

   	print("colliding? " + hit);

   }
