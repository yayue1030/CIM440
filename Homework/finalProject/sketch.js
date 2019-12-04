var snowflakes = [];
var r;
var g;
var b;

var song;
var slider;
var sliderRate;
var sliderPan;

var button;
var bodyCol ="HotPink";
var color2 ="orange"
var color3= "random(100,255), random(100,255), random(100,255)";
var color4="pink";
var sparkles = [];


var giftX = [];
var giftY = [];
var giftAmount = 30;
var giftImage;


var gif_loadImg1, gif_createImg1;
var gif_loadImg2, gif_createImg2;
var gif_loadImg3, gif_createImg3;
var gif_loadImg4, gif_createImg4;

var button1;
var button2;
var button3;
var button4;

var playing = false;
var chris;
var button5;




function preload(){
  leafImage = loadImage("gift.png");
	chris = createVideo(["man.mp4"]);


 gif_loadImg1 = loadImage("https://media.giphy.com/media/WyelgLZRz79rW/giphy.gif");
 gif_createImg1 = createImg("https://media.giphy.com/media/WyelgLZRz79rW/giphy.gif");

 gif_loadImg2 = loadImage("shiny.gif");
 gif_createImg2 = createImg("shiny.gif");

 gif_loadImg3 = loadImage("deer.gif");
 gif_createImg3 = createImg("deer.gif");

 gif_loadImg4 = loadImage("ball.gif");
 gif_createImg4 = createImg("ball.gif");

}


function setup() {
	createCanvas(1600,800);

	gravity = createVector(0, 0.2);
	  stroke(255);
	  strokeWeight(4);

  song= loadSound("music.mp3", loaded);

	button1 = createButton("Play");
	button1.position(1400,30);
	button1.size(90,30);
  button1.mousePressed(togglePlaying);

	button2 = createButton("Volume");
	button2.position(1320,80);
	button2.size(50,20);

  slider = createSlider(0,1,0.5,0.01);
	slider.position(1380,80);
	slider.style('width', '130px');


	button3 = createButton("Rate");
	button3.position(1320,110);
	button3.size(50,20);

	sliderRate = createSlider(0, 1.5, 1, 0.01);
  sliderRate.position(1380,110);
  sliderRate.style('width', '130px');

  button4 = createButton("Pan");
	button4.position(1320,140);
	button4.size(50,20);

  sliderPan = createSlider(-1, 1, 0, 0.01);
	sliderPan.position(1380,140);
	sliderPan.style('width', '130px');

	button5 = createButton('PlayVide');
	button5.position(1500,740);
	button5.size(70,40);
	button5.mousePressed(toggleVid);


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
    button1.html("play");
  } else {
    song.stop();
    button1.html("pause");
  }
}

function toggleVid() {
  if (playing) {
    chris.pause();
    button5.html('play');
  } else {
    chris.loop();
    button5.html('pause');
  }
  playing = !playing;
}


function loaded() {
  console.log("loaded");
}

function loaded(){
	song.play();
}


function draw() {
image(gif_loadImg1);
 gif_createImg1.position(10, 30);
 gif_createImg1.size(180,190);//santa

 image(gif_loadImg2);
  gif_createImg2.position(100, 125);
  gif_createImg2.size(300,500);//shiny

	image(gif_loadImg3);
   gif_createImg3.position(935, 180);
   gif_createImg3.size(550,320);//deer

	 image(gif_loadImg4);
    gif_createImg4.position(690, 230);
    gif_createImg4.size(180,300);//ball

		chris.position(880,270);
		chris.size(650,550);



 song.setVolume(slider.value());
	song.pan(sliderPan.value());
	 song.rate(sliderRate.value());

colorMode(RGB);
 //background("#ffcccc");
 r = map(mouseX, 0,800, 0 ,36)
 g = map (mouseY, 0, 800, 0, 93 );
 b = map(mouseX, 0 , 800, 0 ,199);
 background(r,g,b);

 textSize(40);
 fill("lightyellow");
 text('MERRY CHRISTMAS', 600, 80);



  let t = frameCount / 60;
  noStroke();

  for (var i = 0; i < sparkles.length; i = i + 1) {
    var sparkle = sparkles[i];

    fill(sparkle.h, 180, 200-sparkle.frames/2 + random(100));
     ellipse(sparkle.x, sparkle.y, sparkle.r+ 30);

    sparkle.x = sparkle.x + sparkle.vx;
    sparkle.y = sparkle.y + sparkle.vy;

    // add a little friction & gravity
    sparkle.vx = sparkle.vx * 0.99;
    sparkle.vy = sparkle.vy * 0.99 + 0.10;

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

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.2; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
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

	bodyCol="skyblue";
	color2 ="Plum";
	color4 ="#ff66a3";


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


}//end of draw
