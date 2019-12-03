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




function setup() {
	var cnv = createCanvas(800,800);
  cnv.id("mycanvas");

	var container0 = createDiv();
	  container0.id("container0");

	  select("#container0").html("<h1><center>MERRY CHRISTMAS!</center></h1><center>");


	  select("#container0").style("width", "800px");
	  select("#container0").style("margin", "0 auto");

	  cnv.parent("#container0");

	  select('body').style("background-color", "#ffd699");






	song= loadSound("music.mp3", loaded);

	button = createButton("play");
	button.position(690,120);
	button.size(60,30);
  button.mousePressed(togglePlaying);

	slider = createSlider(0,1,0.5,0.01);
	slider.position(770,120);
	slider.style('width', '130px');


	sliderRate = createSlider(0, 1.5, 1, 0.01);
  sliderRate.position(770,150);
  sliderRate.style('width', '130px');

  sliderPan = createSlider(-1, 1, 0, 0.01);
	sliderPan.position(770,180);
	sliderPan.style('width', '130px');
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
    button.html("pause");
  } else {
    song.stop();
    button.html("play");
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

	//textSize(15);
	//text('sliderRate', 580, 90);
 //fill("black");


//flashing circles
// fill(random(100,255),random(255), random(255));
// ellipse(190, 190, 30, 30);
//
// fill(random(100,255),random(255), random(255));
// ellipse(290, 230, 30, 30);
//
// fill(random(100,255),random(255), random(255));
// ellipse(200, 300, 30, 30);
//
// fill(random(100,255),random(255), random(255));
// ellipse(290, 360, 30, 30);
//
// fill(random(100,255),random(255), random(255));
// ellipse(190, 400, 30, 30);
//
// fill(random(100,255),random(255), random(255));
// ellipse(160, 490, 30, 30);
//
// fill(random(100,255),random(255), random(255));
// ellipse(300, 500, 30, 30);
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
