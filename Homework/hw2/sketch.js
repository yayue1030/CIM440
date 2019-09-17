var pointX = 0;
var pointY = 0;

var headX=230;
var headSize=200;
var handSize=60
var eyeSize=40
var headColor="OldLace"
var handColor="255,228,225";
var bodyColor="lightpink"

var colorButton;

var handbutton;





function setup() {
  // put setup code here

  createCanvas(500,800);
  pointX = width/2;//250
  pointY = height/2;//400

   console.log("pointX " + pointX + " pointY " + pointY);

  background("Burlywood");


  colorButton = createButton("Click me");//function that is part of p5.dom library, It generates an html button;
  colorButton.position(pointX - 180, pointY - 190);
  colorButton.size(80,20);
  colorButton.mousePressed(function(){
    headColor = "Tan";
  });


  handButton=createButton("Click me");//9.12 class content
  handButton.position(pointX + 160, pointY - 30);
  handButton.size(80,20);

  handButton.mousePressed(function(){
   //your action goes in here
   //The button mousepressed function is tied to the general mousepread function
    handColor="red";

  });

}

function draw() {
  // put drawing code here

  if(mouseX < pointX){
   console.log("left hand side");
   background("#BC8F8F");

  }

  if (mouseX > pointY){
    console.log("left hand side");
    background(176,196,222);
  }


  strokeWeight(3);
  fill(headColor);//headcolor
  ellipse(headX,headX,200,200);//head

  fill("white");
  ellipse(190,200,40,40);//left eye

  fill("white");
  ellipse(270,200,40,40);//right eye

  fill(bodyColor);
  ellipse(230,480,200,300);//body

  fill(handColor)
  ellipse(40,420,60,60);//left hand

  fill(handColor)
  ellipse(425,340,60,60);//right hand

  fill((255,228,225))
  ellipse(200,730,60,60);//left foot
  ellipse(265,730,60,60);//right foot

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


function mousePressed(){
 bodyColor="OldLace"
}

function mouseReleased(){
  bodyColor="Lavender";
}

function keyPressed(){
  bodyColor="lightblue";


}
