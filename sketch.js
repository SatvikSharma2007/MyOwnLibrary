var fixedRect,movingRect;
var gameObject1,gameObject2;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(100,100,80,30);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  gameObject1=createSprite(100, 100, 50, 50);
  gameObject2=createSprite(200,100,80,30);
  gameObject1.shapeColor="green";
  gameObject2.shapeColor="green";
  }

function draw() {
  background(0); 
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if (isTouching(movingRect,gameObject1)){
    gameObject1.shapeColor="red";
    movingRect.shapeColor="red";

  }
  else {
  gameObject1.shapeColor="green";
  movingRect.shapeColor="green";
  }
  drawSprites();
}
