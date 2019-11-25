var button1;



function setup() {
  // put setup code here
  createCanvas(400,400);

  button1 = new Clickable();
  button1.locate(20,20);


  button1.onHover = function(){
	this.color = "#AAAAFF";
	this.textColor = "#FFFFFF";
	this.text = "Yay!";

   }
}



function draw() {
   // put drawing code here
   background(255);
   button1.draw

 }
