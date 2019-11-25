var waves = [];
var wavePoints = [];
var density = 24;

var song;
var slider;
var sliderRate;
var sliderPan;

var button;

var bodyCol="pink";




function setup() {


	var cnv = createCanvas(400,400);
cnv.id("mycanvas");

var container0 = createDiv();
container0.id("container0");
//To search for an id, you use the # token infront of the name
// .html() fuction allows you to inject html or text into another html tag
select("#container0").html("<h1>Your sketch title here!</h1>");

// .style("css property", "value")
select("#container0").style("width", "400px");
select("#container0").style("margin", "0 auto");//center your container, margin: 0 auto, 0 refers to top and bottom spacing, the auto refers to left and right spacing. This will only work if you set a width

cnv.parent("#container0");

select('body').style("background-color", "orange");
var container1 = createDiv();
container1.html('<iframe width="560" height="315" src="https://www.youtube.com/embed/8j0UDiN7my4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

	createCanvas(1280, 720);
	noStroke();
	frameRate(40);

	oceanViewSetup();

	song= loadSound("music.mp3", loaded);

	button = createButton("play");
	button.position(20,720);
   button.mousePressed(togglePlaying);

	slider = createSlider(0,1,0.5,0.01);
	slider.position(70, 720);
	slider.style('width', '150px');


	sliderRate = createSlider(0, 1.5, 1, 0.01);
  sliderRate.position(70, 750);
sliderRate.style('width', '150px');
  sliderPan = createSlider(-1, 1, 0, 0.01);
	sliderPan.position(70, 780);
	sliderPan.style('width', '150px');
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
	background(100, 160, 220);
song.setVolume(slider.value());
song.pan(sliderPan.value());
 song.rate(sliderRate.value());

	// rotate rudder
	translate(width / 2, height / 2);
	//rotate(PI / 3.0);
	if (mouseOnSun()) {
		fill(190, 80, 50);
	} else {
		fill(190, 80, 50, 100);
	}
	ellipse(0, 0, 100, 100);
	translate(-width / 2, -height / 2);
	oceanView();
	//print(millis());


	ellipse(200,200,320,320)
}

function WavePoint(x, y, index) {
	this.x = x;
	this.y = y;
	this.index = index;
	this.move = function(speed) {
		speed = 15 * speed / (12 + density - this.index / density)
		this.x += random(-speed, speed);
		this.y += random(-speed / 4, speed / 4);
	}
	this.display = function() {
		fill(255);
		ellipse(this.x, this.y, 10, 10);
	}
}

function Wave(a, b, c, colorW, colorH, colorS, colorB, index) {
	this.x1 = a.x;
	this.y1 = a.y;
	this.x2 = b.x;
	this.y2 = b.y;
	this.x3 = c.x;
	this.y3 = c.y;
	this.color = colorW;
	this.colorH = colorH;
	this.colorS = colorS;
	this.colorB = colorB;
	this.index = index;

	this.update = function(a, b, c) {
		if (frameCount % 3 == 0) {
			this.x1 = a.x;
			this.y1 = a.y;
			this.x2 = b.x;
			this.y2 = b.y;
			this.x3 = c.x;
			this.y3 = c.y;
		}
		var rand = random(-2, 2);
		if (this.colorS + rand < 90 && this.colorS + rand > 75) {
			this.colorS += rand;
		}

		colorMode(HSB);
		if (this.index%5==0&&mouseOnSun()){
			this.color = color(this.colorH+20, this.colorS-35, this.colorB);
		}
	  	else if (mouseOnSun()){
	  		this.color = color(this.colorH+5, this.colorS-20, this.colorB);
	}else {
		  this.color = color(this.colorH, this.colorS, this.colorB);
		}colorMode(RGB);

	}

	this.display = function() {
		fill(this.color);
		triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
	}

}

function oceanView() {
	var j = 0;
	for (var i = 0; i < density * density; i++) {
		wavePoints[i].move(3);
		//wavePoints[i].display();
		if (i % density != 0 && i % density != (density - 1) && i > (density - 1) && i < density * (density - 1)) {
			waves[2 * j].update(wavePoints[i], wavePoints[i - density], wavePoints[i - 1]);
			waves[2 * j + 1].update(wavePoints[i], wavePoints[i - density], wavePoints[i - density + 1]);
			waves[2 * j].display();
			waves[2 * j + 1].display();
			//j=10*((i-i%12)/12-1)+(i-1)%12;
			j++;
		}
	}
}

function oceanViewSetup() {
	var rand, fillColor;

	for (var i = 0; i < density * density; i++) {
		// x in even rows +360 / (density - 2)
		if (((i - i % density) / density) % 2) {
			wavePoints.push(new WavePoint(-2400/density + 1280 / (density - 6) * (i % density), height / 2 + (height / 2 + 100) / (density - 2) * ((i - i % density) / density), i));
		} else {
			wavePoints.push(new WavePoint(-40-2400/density + 1280 / (density - 6) * (i % density), height / 2 + (height / 2 + 100) / (density - 2) * ((i - i % density) / density), i));
		}
		wavePoints[i].move(600 / density);
	}
	for (var j = 0; j < (density - 2) * (density - 2); j++) {
		rand = 1 + int(random(30));
		fillColor = color(20, 100 + rand, 200 + rand);
		waves.push(new Wave(wavePoints[j], wavePoints[j], wavePoints[j], fillColor, 215 + random(10), 80 + random(5), 80, j * 2));
		rand = 1 + int(random(30));
		//fillColor = color(120, 120 + rand, 180 + rand);
		waves.push(new Wave(wavePoints[j], wavePoints[j], wavePoints[j], fillColor, 215 + random(10), 80 + random(5), 80, j * 2 + 1));
	}
}

function mouseOnSun() {
	if (dist(mouseX, mouseY, width / 2, height / 2) < 50) {
		return true;
	} else {
		return false;
	}


}
