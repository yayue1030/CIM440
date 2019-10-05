var puppyImage;

var show;
var hide;


var showAndHide = false;//means the program first run, the picture doesnt show,





function preload(){
//use to load media
  puppyImage = loadImage("puppies.jpg");
}

function setup() {
  // put setup code here
  createCanvas(400,400);
  show = createButton("Show Puppy");
  show.mousePressed(function(){
   showAndHide = true;
});

    hide = createButton("Hide Puppy");
    hide.mousePressed(function(){
     showAndHide = false;
});
}



function draw() {

  background(255);
   if(showAndHide == true){

    image(puppyImage,0,0, puppyImage.width/4, puppyImage.height/4);

 }


 //message in quotes, x pos, y pos
 text("Click on the buttons to see a cute cuppy", 10,10);

}
