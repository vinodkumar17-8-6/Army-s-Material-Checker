
var wall,thickness;
var bullet,speed, weight;
var damage; 

function setup() {
createCanvas(1600,400);
speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);

bullet=createSprite(50, 200, 50, 10);
bullet.velocityX = speed;

wall=createSprite(1400,200,thickness,height/2);

wall.shapeColor=(80,80,80);

}

function draw() {
  background(220);  
  
  if (hasCollided(bullet,wall)){

   bullet.velocityX = 0;

   damage = 0.5 * weight *speed * speed / (thickness * thickness * thickness);
  
   if(damage > 10){
     wall.shapeColor = "red";
     fill("red");
     textSize(30);
     text("Unsafe Material ",600,height/2);
   }
    
   if(damage < 10){
     wall.shapeColor = "green";
     fill("green");
     textSize(30);
     text("Safe Material ",600,height/2);
   }
    
  }

  drawSprites();
}

function hasCollided(bullet,wall){

  bulletRightEdge = bullet.x + bullet.width;

  wallLeftEdge = wall.x;

  if(bulletRightEdge >= wallLeftEdge){
     
     return true;
  }

  return false;

}