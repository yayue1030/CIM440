var puppyImage;

function preload(){
//use to load media
  puppyImage = loadImage("puppies.jpg")

}


function setup() {
  // put setup code here

  createCanvas(400,400);

}


function draw() {
   // put drawing code here
   //image var, x position, y position
   image(puppyImage,0,0); //full scale

   //image var, x pos, y pos, width, height
  // dividing the width and height by a number scales proportionally

  //when you divide by a number, the image will scale proporionally
   image(puppies,100,100,puppies.width/4, puppies. height/4);

   //set exact dimension
   image(puppies, 200, 200,125,200);//setting exact dimension, scale to
}
