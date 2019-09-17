var faceColor="blue";
var pointX=0;


function setup() {
// put setup code here
//if you declare a variables inside of a block of code ie{},
//that variable will only available inside of that block


  var message="hello";

  console.log(message);

  //console.log(drawmessage); error not defined,
  //because drawMessage's variable scope is inside of the draw loop

}


function draw() {
  // put drawing code here




//console.log(message); Error; not defined,
//because message variable scope is only inside the setup


var drawmessage = "this message is in the draw loop";//this creates a new variable the draw loop happens

console.log(drawMessage);

}
