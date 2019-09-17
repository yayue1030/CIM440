var puppies;

var showOrHide = false;

var show;
var hide;




function preload(){

  puppies = loadImage("puppies.jpg");

  show = createButton("Show Puppy");
  show.mousePressed(function(){

    showOrHide = true;


 });

  hide = createButton("Hide Puppy");
  hide.mousePressed(function(){
    showOrHide = true;

});
}

function setup() {
  // put setup code here

  createCanvas(400,400);

}


function draw() {

  background(255);
   if(showOrHide == true){

    image(puppies,100,100, puppies.width/4, puppies.height/4);

 }


 //message in quotes, x pos, y pos
 text("Click on the buttons to see a cute cuppy", 10,10);

}
