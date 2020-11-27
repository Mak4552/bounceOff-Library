var fixedRect, movingRect;
var a,b;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  a = createSprite(200, 800,80,30);
  b = createSprite(200, 100,80,30);
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  a.velocityY = -5;
  b.velocityY = +5;
}
function draw() {
  background(0,0,0);  
  

  bounceOff(movingRect,fixedRect);
  bounceOff(a,b);
  drawSprites();
}
