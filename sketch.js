var fixedRect;
var movingRect;
var box1
var box2
function setup() {
  createCanvas(800,400);
  // fixedRect= createSprite(400, 100, 50, 50);
  // fixedRect.shapeColor= "green";
  // fixedRect.debug= true;
 
 

  // movingRect = createSprite(400,400,50,50);
  // movingRect.shapeColor = "green";
  // movingRect.debug= true;  

  box1 = createSprite(300,100,50,50);
  box1.shapeColor = "green"
  box1.velocityY = 3;

  box2 = createSprite(300,400,50,50);
  box2.shapeColor = "blue";
  box2.velocityY = -3;
 
}
 
function draw() {
  background(0);  
  
  // box2.x= mouseX;
  // box2.y= mouseY;

  // if(isTouching(box1,box2)){
  //  box1.width = 200;
  //  box2.shapeColor = "blue";
  // }
  // else{
  //   box1.width= 100;
  //   box1.shapeColor= "green";
  // }

  bounceOff(box1,box2);

  drawSprites();
}


