var img;
function setup() {
  createCanvas(400, 400);
  img = loadImage("img.png");
}

function draw() {
  background("#ffe6e6");
  image(img, 0,0, 200, 200);
}
