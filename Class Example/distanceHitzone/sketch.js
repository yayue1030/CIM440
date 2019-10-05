var hitX = 100;
var hitY = 100;
var threshold = 20;

var hitDistance = 0;

var changeBackground= "white";

function setup() {
  // put setup code here
  createCanvas(400,400);
}


function draw() {
   // put drawing code here
  background(changeBackground);
   //Calculate distance between 2 points
   hitDistance = dist(mouseX,mouseY,hitX,hitY);

   console.log("hitDistance" + hitDistance);
   //hover statement

   //if the distance is less than or equal to 20, our range is 0-20 including 20.
   if(hitDistance <= threshold){
     fill(127);
     text("click here", hitX, hitY+30);
   }else{
     //if the above is not true, then execute the else statement
     fill(255);
  }
//(same with writing another if statement below)


   //if(hitDistance > threshold){
     //fill(255);
   //}(mouse in the circle, color is gray, outside the circle, color is white)

   ellipse(hitX, hitY, threshold*2, threshold*2);

 }


  function mousePressed(){
    //on click
    if(hitDistance <= threshold){
    console.log("clicked");
    changeBackground ="blue";
   }else{
    //if the above is not true, then excute the esle state
   console.log("Clicked outside");
   changeBackground ="white";
  }
 }
