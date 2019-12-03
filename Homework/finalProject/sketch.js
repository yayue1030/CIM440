var snowflakes = [];
var r;
var g;
var b;

var song;
var slider;
var sliderRate;
var sliderPan;


var bodyCol ="HotPink";
var color2 ="orange"
var color3= "random(100,255), random(100,255), random(100,255)";
var color4="pink";
var sparkles = [];


var giftX = [];
var giftY = [];
var giftAmount = 12;
var giftImage;

var button1;
var button2;
var button3;
var button4;

var button5;
var button6;
var manVid;


function preload(){
  leafImage = loadImage("gift.png");
	manVid = createVideo("man.mp4");

}


function setup() {
	var cnv = createCanvas(1200,800);
  cnv.id("mycanvas");
    var container0 = createDiv();
	  container0.id("container0");
    select("#container0").html("<h1><center>MERRY CHRISTMAS!</center></h1><center>");
    select("#container0").style("width", "1200px");
	  select("#container0").style("margin", "0 auto");
    cnv.parent("#container0");
		select('body').style("background-color", "#ffd699");

  song= loadSound("music.mp3", loaded);

	button1 = createButton("play");
	button1.position(1100,100);
	button1.size(90,30);
  button1.mousePressed(togglePlaying);

	button2 = createButton("volume");
	button2.position(1100,130);
	button2.size(90,30);
  slider = createSlider(0,1,0.5,0.01);
	slider.position(1370,120);
	slider.style('width', '130px');

  button3 = createButton("rate");
	button3.position(1100,160);
	button3.size(90,30);
	sliderRate = createSlider(0, 1.5, 1, 0.01);
  sliderRate.position(1370,150);
  sliderRate.style('width', '130px');

  button4 = createButton("pan");
	button4.position(1100,190);
	button4.size(90,30);
  sliderPan = createSlider(-1, 1, 0, 0.01);
	sliderPan.position(1370,180);
	sliderPan.style('width', '130px');

	button5 = new hitzoneObject(100,200,50,"red", "Stop", loadImage("stop.png"));
  button6 = new hitzoneObject(200,200,50,"green", "Play", loadImage("play.png"));
  manVid.hide();


	for(var i = 0; i< giftAmount; i++){
    giftX[i] = random(0,width);
    giftY[i] = random(100,-500);
  }

  console.log("giftX " + giftX);
  console.log("giftY " + giftY);
}


function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
    button1.html("pause");
  } else {
    song.stop();
    button1.html("play");
  }
}

function loaded() {
  console.log("loaded");
}

function loaded(){
	song.play();
}


function draw() {

  song.setVolume(slider.value());
	song.pan(sliderPan.value());
	 song.rate(sliderRate.value());

 background("#ffcccc");

  let t = frameCount / 60;
  noStroke();

  for (var i = 0; i < sparkles.length; i = i + 1) {
    var sparkle = sparkles[i];

    fill(sparkle.h, 100, 200-sparkle.frames/2 + random(100));
     ellipse(sparkle.x, sparkle.y, sparkle.r+17);

    sparkle.x = sparkle.x + sparkle.vx;
    sparkle.y = sparkle.y + sparkle.vy;

    // add a little friction & gravity
    sparkle.vx = sparkle.vx * 0.99;
    sparkle.vy = sparkle.vy * 0.99 + 0.02;

    // count frames
    sparkle.frames = sparkle.frames + 1;
  }

  while(sparkles.length > 0 && sparkles[0].frames > 240) {
    sparkles.shift();
  }


for(var f = 0; f < giftAmount; f++){
	      if(giftY[f]<height -50){
	        giftY[f]++;
	        giftX[f] = giftX[f] + sin(radians(frameCount));
	        //console.log("leafY " + f + " " + leafY[f]);
	      }

	      image(leafImage, giftX[f], giftY[f], 60, 60);

	    }

//buttons for controlling the vide
			  button5.display();
			  button5.check();
			  console.log("button5 overlay " + button5.overlay);
			  button6.display();
			  button6.check();


fill(255);
noStroke();
ellipse(620, 390, 150, 150);//snowman
ellipse(620, 610, 270, 300);//snowmanbody

fill(0);
noStroke();
ellipse(590, 370, 16, 16);//eye
ellipse(650, 370, 16, 16);//eye


stroke(70,56,40);
strokeWeight(10);
line(420, 480, 505, 560);//arm

line(790, 480, 730, 560);//arm

fill(color4);
noStroke();
arc(620, 410, 50, 50, 100, PI + QUARTER_PI, PIE);//mouse


fill(bodyCol)
rect(560, 450, 120, 40);
rect(560, 450, 40, 120);


fill(color2);
ellipse(620, 590, 30, 30);
ellipse(620, 660, 30, 30);
//end of snowman

fill(62, 171, 65);
noStroke();
triangle(100, 270, 350, 270, 220, 100);
triangle(70, 420, 390, 420, 220, 200);
triangle(40, 570, 430, 570, 220, 320);

 fill(154, 156, 154);
 rect(200, 570,60 ,270);
	//end of christmas tree


flashingcircle(190,190,30)
//end of flashing circle

fill(255);
  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

//flashing circles
function flashingcircle(x, y, size){
  fill(random(100,255),random(100,255), random(100,255));

   ellipse(x, y, size, size);

	 ellipse(x+100, y+40, size, size);

	 ellipse(x+10, y+130, size, size);

	 ellipse(x+10, y+130, size, size);

	 ellipse(x+100, y+170, size, size);

	 ellipse(x, y+260, size, size);

	 ellipse(x+110, y+310, size, size);

}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 6);
  this.radius = sqrt(random(pow(width / 2, 2)));
	this.update = function(time) {

    let w = 0.2; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    this.posY += pow(this.size, 0.5);

   if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}

function mousePressed() {

	if(button5.overlay == true){
    console.log(button5.label);

    manVid.stop();
    manVid.hide();
  }

  if(button6.overlay == true){
    console.log(button6.label);
    manVid.show();
    manVid.play();
    manVid.style("display","inline-block");//place next to an html element
  }

//color changing
	bodyCol="skyblue";
	color2 ="Plum";
	color4 ="#ff66a3";

//fireworks
  for (var i = 0; i < 30; i = i + 1) {
    var angle = random(TWO_PI);
    var distance = random(1.5,2);

    sparkles.push({
      h: random(360),
      x: mouseX,
      y: mouseY,
      vx: distance * sin(angle),
      vy: distance * cos(angle),
      frames: 0,
      r: 4
    });
  }

class hitzoneObject{

  constructor(tempX, tempY, tempSize, tempColor,tempLabel, tempImage){
    this.x = tempX;
    this.y = tempY;
    this.boxSize = tempSize;
    this.boxColor = tempColor;
    this.overlay = false;
    this.label = tempLabel;
    this.image = tempImage;
  }

  display(){
    fill(this.boxColor);
    text(this.label,this.x,this.y -20);
    //rect(this.x,this.y,this.boxSize,this.boxSize);
    image(this.image,this.x,this.y,this.boxSize,this.boxSize);

if(this.overlay == true){
      fill(127,127);
      rect(this.x,this.y,this.boxSize,this.boxSize);
    }
}

  check(){
    if(mouseX > this.x && mouseX < (this.x + this.boxSize) && mouseY > this.y && mouseY < (this.y + this.boxSize)){
    //  console.log("over button " + this.boxColor);
    this.overlay = true;
    }else{
      //console.log("off button" + this.boxColor);
      this.overlay = false;
    }
  }
}
