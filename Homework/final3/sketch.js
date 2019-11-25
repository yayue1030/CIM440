var snowflakes = []; // array to hold snowflake objects
var r;
var g;
var b;

var sparkles = [];

function setup() {
  createCanvas(800, 800);
  fill(255);
  noStroke();
}

function draw() {
  background(0);
  let t = frameCount / 60; // update time


	noStroke();

  for (var i = 0; i < sparkles.length; i = i + 1) {
    var sparkle = sparkles[i];

    fill(sparkle.h, 100, 120-sparkle.frames/2 + random(40));
    ellipse(sparkle.x, sparkle.y, sparkle.r+10);

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


//rect(100, 500, 230, 290);
 //triangle(60,500,100,600,300,300)

fill("green");
noStroke();
  triangle(100, 270, 350, 270, 220, 100);
	triangle(70, 420, 390, 420, 220, 200);
	triangle(40, 570, 430, 570, 220, 320);
 fill("gray");
	rect(200, 570,60 ,270);

fill(random(100,255),random(255), random(255));
ellipse(190, 190, 30, 30);

fill(random(100,255),random(255), random(255));
ellipse(290, 230, 30, 30);

fill(random(100,255),random(255), random(255));
ellipse(200, 300, 30, 30);

fill(random(100,255),random(255), random(255));
ellipse(290, 360, 30, 30);

fill(random(100,255),random(255), random(255));
ellipse(190, 400, 30, 30);



fill(random(100,255),random(255), random(255));
ellipse(160, 490, 30, 30);

fill(random(100,255),random(255), random(255));
ellipse(300, 540, 30, 30);







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

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
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
}
