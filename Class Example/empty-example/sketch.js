function setup() {
  // put setup code here
  createCanvas(500,500);
  background(0,255,0);
}

function draw() {
  // put drawing code here

  fill("yellow");//default
  stroke(0);//default
  strokeWeight(1);//default (if the below elements do not have specific write of color or strokeweight, these default will apply)

  fill("blue");//css color
  strokeWeight(1);
  ellipse(100,100,20,20); //left eye

  ellipse(140,100,20,20); //right eye

  fill(255,5,5);//rgb color
  rect(80,200, 100,30); //mouth

  fill(255);//grayscale color
  strokeWeight(5);
  point(72,382);

strokeWeight(1);
  line(80,215,180,215);//mouth split

  //width and height
  //console.log("width " + width);
  //console.log("height "+ height);

  triangle(width/2,height/2,width/2+10,height/2+10,width/2-10,height/2+10);

  arc(300,300,50,50,0,PI);
  arc(400,400,40,40,PI+HALF_PI,0);
  arc(300,150,50,50,0,TWO_PI);
  arc(400,100,50,50,HALF_PI, PI+HALF_PI);


 triangle(100,400,120,420,80,420);

 line(100,300,200,300);//horizontal line, use a common y value
 line(100,200,100,300);//vertical line, use a common x value




}//end of draw
