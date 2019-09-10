var headX=230;
var headSize=200;
var handSize=60
var eyesize=40
var headcolor="OldLace"




function setup() {
  // put setup code here

  createCanvas(500,800);
  background("Burlywood");
}

function draw() {
  // put drawing code here

  strokeWeight(3);
  fill("OldLace");//headcolor
  ellipse(headX,headX,headSize,headSize);//head

  fill("white");
  ellipse(190,200,eyesize,eyesize);//left eye
  ellipse(270,200,eyesize,eyesize);//right eye

  fill(headcolor);
  ellipse(headX,480,200,300);//body

  fill(255,228,225)
  ellipse(40,420,handSize,handSize);//left hand
  ellipse(425,340,handSize,handSize);//right hand

  ellipse(200,730,handSize,handSize);//left foot
  ellipse(265,730,handSize,handSize);//right foot

triangle(240, 130, 300, 100, 320, 180);//decorationtri




  strokeWeight(10);
  point(190, 200);//lefy eye point
  point(270, 200);//right eye point
  line(230, 230, 230, 250);//nose

  strokeWeight(3);
  fill("pink")
  arc(230, 270, 50, 50, 0, PI + QUARTER_PI, PIE);//mouth

  strokeWeight(5);
  line(70, 420, 135, 420);//left arm
  line(400, 360, 325, 420);//left arm
  line(200, 625, 200, 700);//left leg
  line(265, 625, 265, 700);//right leg



}
