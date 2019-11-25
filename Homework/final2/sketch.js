let rSlider, gSlider, bSlider;





let bugs = [];
let amt = 1000;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB);

  for (let i = 0; i < amt; i++) {
    let x = 100;
    let y = 100;
    let rad = random(10, 50);

    let b = new Bug(x, y, rad);
    bugs[i] = b;
  }
}

function draw() {
  background(50, 0.25);

  lung(350,50,11);//lung

fill(255);
  rect(200, 700, 300, 30);

  for (let i = 0; i < bugs.length; i++) {
    bugs[i].show();
    bugs[i].move();

    if( bugs[i].radius > 100 ) {
      bugs.splice(i, 1);
    }
  }

  let x = 400;
  let y = 600;
  let rad = random(10, 20);
  let b = new Bug(x, y, rad);
	bugs.push(b);
}

class Bug {
  constructor(tempX, tempY, tempRadius) {
    this.x = tempX;
    this.y = tempY;
    this.radius = tempRadius;
    this.color = color(random(80,100), 0.05);
  }

  show() {
    noStroke();
    fill(this.color);
    ellipse(this.x+120, this.y+100, this.radius);
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y - random(2);
    this.radius = this.radius + 0.4;
  }
}


function lung(x, y, size){
fill(255);
  rect(x, y, size, size);
  rect(x+13, y, size, size);
  rect(x+26, y, size, size);
  //first row  horizontal
  rect(x, y+15, size, size);
  rect(x+13, y+15, size, size);
  rect(x+26, y+15, size, size);
  //second row horizontal
  rect(x, y+30, size, size);
  rect(x+13, y+30, size, size);
  rect(x+26, y+30, size, size);
  // third
  rect(x, y+45, size, size);
  rect(x+13, y+45, size, size);
  rect(x+26, y+45, size, size);
  //fourth
  rect(x, y+60, size, size);
  rect(x+13, y+60, size, size);
  rect(x+26, y+60, size, size);//fifth

  rect(x, y+75, size, size);
  rect(x+13, y+75, size, size);
  rect(x+26, y+75, size, size);//sixth

  rect(x, y+90, size, size);
  rect(x+13, y+90, size, size);
  rect(x+26, y+90, size, size);//sixth

  rect(x, y+105, size, size);
  rect(x+13, y+105, size, size);
  rect(x+26, y+105, size, size);//sixth

  rect(x-13, y+105, size, size);
  rect(x-13, y+120, size, size);
  rect(x-13, y+135, size, size);
  rect(x-13, y+150, size, size);

  rect(x-26, y+105, size, size);
  rect(x-26, y+120, size, size);
  rect(x-26, y+135, size, size);
  rect(x-26, y+150, size, size);









}
