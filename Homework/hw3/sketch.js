// Sloth image "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// Puppy image "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22


var sloth, puppy, dinosaur, pets, squirrel, seagull;

var aButton, bButton, cButton, dButton, eButton, fButton

var currentImage = 0;

var curIamge;


function preload(){
  sloth = loadImage("images/sloth.jpg");
  puppy = loadImage("images/puppy.jpg");
  dinosaur = loadImage("images/dinosaur.jpg");
  pets = loadImage("images/pets.jpg");
  squirrel = loadImage("images/squirrel.jpg");
  seagull = loadImage("images/seagull.jpg");
}

function setup() {
  // put setup code here
  createCanvas(400,400);

  aButton = createButton("Sloth");
  aButton.mousePressed(function(){

      currentImage = 0;

  });

  bButton = createButton("Puppy");
  bButton.mousePressed(function(){

      currentImage = 1;

  });


  cButton = createButton("Dinosaur");
 cButton.mousePressed(function(){

     currentImage = 2;

 });

 dButton = createButton("Pets");
dButton.mousePressed(function(){

    currentImage = 3;

});

eButton = createButton("Squirrel");
eButton.mousePressed(function(){

   currentImage = 4;

});

fButton = createButton("Seagull");
fButton.mousePressed(function(){

   currentImage = 5;

});


 curImage = sloth;

}

function draw() {

  background(255);

  console.log("currentImage " + currentImage);
  // put drawing code here


image(curImage,0,0,curImage.width/4,curImage.height/4);

  if(currentImage == 0){
    curImage = sloth;
 }else if(currentImage == 1){
    curImage = puppy;
 }else if(currentImage == 2){
    curImage = dinosaur;
 }else if(currentImage == 3){
      curImage = pets;
 }else if(currentImage == 4){
        curImage = squirrel;
 }else if(currentImage == 5){
          curImage = seagull;
}

//image(curImage,0,0,curImage.width/4,curImage.height/4);


}
