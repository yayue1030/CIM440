var r =0;
var g =0;
var b =0;
var bubblesize =28;

v



function setup() {
  // put setup code here
 createCanvas(800,600);
}

f


function draw() {
  // put drawing code here
background(36, 93, 199);



for (var x =0; x <= width; x = x+50){
  fill(r, random(20), random(180));
  noStroke();
  ellipse(x, 30,bubblesize,bubblesize);
}// top line of small bubble

for (var x =0; x <= width; x = x+50){
    fill(r, random(20), random(180));
    noStroke();
  ellipse(x, 550,bubblesize,bubblesize);
}// ground line of small bubble

//here start drwaing fishes
fishes(150,180,50);

fishes(350,280,50);

fishes(120,380,50);

fishes(640,170,50);

fishes(550,420,50);

function fishes(x, y, size){

 fill(242, 224, 107);
  ellipse(x, y, size+40, size)


 fill(0);
  ellipse(x-20, y-5, 10,10);

  fill(242, 224, 107);
  triangle(x+40, y, x+70, y-20, x+70, y+20);
  //triangle(140,200,170,180,170,220);
}


// start with bubbles





}//end of draw









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
