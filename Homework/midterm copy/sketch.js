var r =0;
var g =0;
var b =0;
var bubblesize =28;
var bodyCol="PaleTurquoise";
var imageArray=[];
var hitX = [590,500];
var hitY = [695,500];
var hitSize = 30;
var currentImage = 0;

var bubbleX = [];
var bubbleY = [];
var bubbleAmount = 20;

var song;


function preload(){

  imageArray[0] = loadImage("images/1.jpg");
  imageArray[1]= loadImage("images/2.jpg");
  imageArray[2] = loadImage("images/3.jpg");
  imageArray[3]= loadImage("images/4.jpg");
  imageArray[4] = loadImage("images/5.jpg");
}


function setup() {
  // put setup code here
  song= loadSound("music.m4a", loaded);

 var cnv = createCanvas(800,900);

 cnv.id("mycanvas");

   var container0 = createDiv();
   container0.id("container0");
   //To search for an id, you use the # token infront of the name
   // .html() fuction allows you to inject html or text into another html tag
   select("#container0").html("<h1><center>Enjoy The Ocean!<center></h1>");

   // .style("css property", "value")
   select("#container0").style("width", "800px");
   select("#container0").style("margin", "0 auto");//center your container, margin: 0 auto, 0 refers to top and bottom spacing, the auto refers to left and right spacing. This will only work if you set a width

   cnv.parent("#container0");

   select('body').style("background-color", "pink");






 for(var i = 0; i < bubbleAmount; i++){
     bubbleX[i] = random(0,800);
     bubbleY[i] = random(0, -800);
   }
 }

function draw() {
  // put drawing code here
  // (background(36, 93, 199);)
background("black");



//bubbles
  noFill();
  stroke("white");
  strokeWeight(1);
  for(var y = 0; y<bubbleAmount; y++){
    bubbleY[y] = bubbleY[y] + 4;
    ellipse(bubbleX[y],bubbleY[y],60,60);

       if(bubbleY[y] > height){
          bubbleY[y] = random(0,-800);
          bubbleX[y] = random(0,width);
        }
      }


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
}// bottle line of small circles
//end of small flashing circles

//here start drwaing fishes
fishes(150,180,50);

fishes(350,280,50);

fishes(120,380,50);

fishes(640,170,50);

fishes(550,420,50);




//change small circles' color when mouse moving
r = map (mouseX, 0, 800, 0, 80);
g = map (mouseX, 0, 800, 0, 255 );
b = map(mouseX, 0 , 800, 0 ,255);

//imageArray
image(imageArray[currentImage],50,600,imageArray[currentImage].width/2,imageArray[currentImage].height/2);

fill(random(200),g,random(255));
  rect(hitX[0], hitY[0], hitSize, hitSize);

}//end of draw

function loaded() {
  song.play();
}

function mousePressed(){
 bodyCol="blue";
}

function mouseReleased(){
 bodyCol="white";
}

function keyPressed(){
  bodyCol="pink";
}

function mousePressed(){

   if(mouseX > hitX[0] && mouseX < hitX[0] + hitSize && mouseY > hitY[0] && mouseY < hitY[0] + hitSize){
     console.log("Clicked button 0");
     currentImage = currentImage + 1;
     if(currentImage == imageArray.length){
       currentImage = 0;
   }//check length
 }//end of hit[0] click
}//end of mousePressed


function fishes(x, y, size){

 fill(bodyCol);
  ellipse(x, y, size+40, size)//body

 fill(0);
  ellipse(x-20, y-5, 10,10);//eyes

  fill(bodyCol);
  triangle(x+40, y, x+70, y-20, x+70, y+20);
  //triangle(140,200,170,180,170,220);
//end of drawing fishes


//text content
  var s = 'Welcome to the Ocean Worlds';
  fill("#cc00cc");
text(s, 190, 80, 600, 300); // Text wraps within text box


  textSize(32);
  text('Click Me', 460, 720);
}
