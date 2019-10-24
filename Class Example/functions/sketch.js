
function setup() {
  // put setup code here
  createCanvas(400,400);

  hello();
  goodbye("zeven");
  goodbye("Giana");
  goodbye("Steven");
}


function draw() {
   // put drawing code here
frameRate(1);
background(255);

for (var i = 0; i<500, i++){
  circleColor(random(width), random(height), random(0,200), random(255), random(255), random(255));
 }
}

function hello(){
  console.log("hello");
}

function goodbye(message){
  console.log("goodbye" + message);
}


function circleColor(xpos, ypos, csize, r,g,b){
  fill(r,g,b);
  ellipse(xpos, ypos, csize, csize);
}
