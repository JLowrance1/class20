
var fixedRect;
var movingRect


function setup() {
  createCanvas(800,400);
  
  
  fixedRect=createSprite(200, 200, 100, 100);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect=createSprite(100,100,100,100)
  movingRect.shapeColor="red"
  movingRect.debug=true;
}

function draw() {
  background(0); 

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  // if(movingRect.isTouching(fixedRect)) {
  //   fixedRect.shapeColor = "red";
  //   movingRect.shapeColor="green";
  // }

  // if(movingRect.isTouching(fixedRect)) {
  //   fixedRect.shapeColor = "green";
  //   movingRect.shapeColor="red";
  // }


  
  

  
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 
    ){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="green";
  }
  

  drawSprites();
}