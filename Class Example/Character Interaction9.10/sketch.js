var pointX=0;
var pointY=0;

var faceColor="purple";


function setup() {
  // put setup code here

 createCanvas(400,400);

  pointX=width/2;//200
  pointY=height/2;//200
  console.log("pointX"+pointX+"pointY"+pointY);

  faceButton=createButton("Click to turn orange");//9.12 class content
  faceButton.position(20,20);
  faceButton.mousePressed(function(){
   //your action goes in here
   //The button mousepressed function is tied to the general mousepread function
    faceColor="orange";

  });

}


   function draw() {
    // put drawing code here
    background(255);


    //I want to change the background based, split screen vertically

    if(mouseX < width/2){
     console.log("right hand side");
     background(255);

    }

    if (mouseX > width/2){
      console.log("left hand side");
      background("green");
    }


    if(mouseX=width/2){
      console.log("center hand side");
      background("yellow");
}

    pointX=mouseX;
    pointY=mouseY;


   console.log("pointX"+pointX+"pointY"+pointY);
   fill(faceColor);

   rect(pointX-100,pointY-100,200,200);

    ellipse(pointX,pointY,10,10);//nose

    ellipse(pointX+20,pointY-20,30,30);//righteye
    ellipse(pointX-20,pointY-20,30,30);//lefteye
    arc(pointX,pointY+10,50,50,0,PI);


  }//end of drawing


  function mousePressed(){
  faceColor="red";
  }

  function mouseReleased(){
    faceColor="purple";
  }

  function KeyPressed(){
    faceColor="blue";
    console.log("Key"+ Key);
    console.log("KeyCode"+ KeyCode);


 //if statement is true, then execute code inside{}
 // == if oneside equals the other
 //if you press b, then key becomes "b"=="b", which is true
 //key returns a character
   if(Key == "b"){
    faceColor="blue";
    }

  //if you press r, then Keycode becomes 82, 82==82, which is true
  //keycode returns a number
    if(KeyCode == 82){
      faceColor ="red";
    }

  }
