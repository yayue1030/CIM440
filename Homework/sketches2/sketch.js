var r =0;
var g =0;
var b =0;
var bubblesize =28;

var bodyCol="Bisque";



function setup() {
  // put setup code here
 createCanvas(800,900);
 }



function draw() {
  // put drawing code herebackground(36, 93, 199);
  r = map(mouseX, 0,800, 0 ,36)
  g = map (mouseY, 0, 800, 0, 93 );
  b = map(mouseX, 0 , 800, 0 ,199);
background(r,g,b);



//circle for mouse
fill("pink");
noStroke();
  ellipse(mouseX, mouseY, 20, 20)





//flashing circles
for (var x =0; x <= width; x = x+50){
  fill(r, random(20), random(180));
  noStroke();
  ellipse(x, 30,bubblesize,bubblesize);
}// top line of small circles

for (var x =0; x <= width; x = x+50){
    fill(r, random(20), random(180));
    noStroke();
  ellipse(x, 550,bubblesize,bubblesize);
}// ground line of small circles

//here start drwaing fishes
//fishes(150,180,50);

//fishes(350,280,50);

//fishes(120,380,50);

//fishes(640,170,50);

//fishes(550,420,50);

//function fishes(x, y, size){
//fill(242, 224, 107);
//  ellipse(x, y, size+40, size)//body

//fill(0);
//  ellipse(x-20, y-5, 10,10);//eye

//  fill(242, 224, 107);
  //triangle(x+40, y, x+70, y-20, x+70, y+20);//tri
  //triangle(140,200,170,180,170,220);
//}

//fish  body
fill(bodyCol);
noStroke();
ellipse(150,180,90,50);
ellipse(250,280,90,50);
ellipse(120,380,90,50);
ellipse(640,170,90,50);
ellipse(520,400,270,150);

//fish eye
fill("gray");
noStroke();
ellipse(130,175,10,10);
ellipse(230,275,10,10);
ellipse(100,375,10,10);
ellipse(450,375,20,20);
ellipse(620,165,10,10);

//fish triangle
fill(bodyCol);
noStroke();
triangle(195, 180, 220, 160, 220, 200);
triangle(295, 280, 320, 260, 320, 300);
triangle(165, 380, 190, 360, 190, 400);
triangle(685, 170, 710, 150, 710, 190);
triangle(655, 400, 700, 470, 700, 330);


// interaction circle
//change small circle color along with mouse moved
r = map (mouseX, 0, 800, 0, 255);
g = map (mouseX, 0, 800, 255, 0 );
b = map(mouseX, 0 , 800, 0 ,255);



}//end of draw

function mousePressed(){
 bodyCol="PeachPuff";
}

function mouseReleased(){
 bodyCol="white";
}

function mouseIsPressed(){
 bodyCol="Ivory";
}

function keyPressed(){
  bodyCol="PaleTurquoise";
}









//fishes.move();

//class fishes{
//constructor(){
  // this.x = 200;
  //  this.y = 200;
  //}

 //move(){
 //this.x = this.x + random(-10,10);
 //this.y = this.y + random(-10,10);

//}






//here start fishes movement

//class fishes{
//  constructor(){
  //  this.x = 200;
  //  this.y = 200;
  //}
//
//  move(){
//    this.x = this.x + random(-10,10);
  //  this.y = this.y + random(-10,10);  }
//}
