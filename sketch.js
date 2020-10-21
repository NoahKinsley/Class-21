var fixedRect, movingRect;
var sprite1,sprite2,sprite3,sprite4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "red";
  fixedRect.velocityY = -3;
  fixedRect.debug = true;

  movingRect = createSprite(600,200,80,30);
  movingRect.shapeColor = "yellow";
  movingRect.velocityY = 3;
  movingRect.debug = true;

  sprite1=createSprite(200,700,50,97);
  sprite1.shapeColor = "purple";


  sprite3=createSprite(500,500,100,100);
  sprite3.shapeColor = "green";

  sprite4=createSprite(100,400,30,700);
  sprite4.shapeColor = "green";



}

function draw() {
  background(0,0,0);  
  
  

  bounceOff(movingRect,fixedRect);


  drawSprites();
}


