var tower1,tower2,tower3,base;
var ring1,ring2,ring3;

var tower1pressed;



function setup() {
  createCanvas(500, 500);
 tower1 = createSprite(110,205,10,200);
  tower1.shapeColor = "brown";
 tower2 = createSprite(200,205,10,200);
  tower2.shapeColor = "brown";
 tower3 = createSprite(300,205,10,200);
  tower3.shapeColor = "brown";
 base = createSprite(205,310,265,10);
  base.shapeColor = "brown";
 ring3 = createSprite(110,300,75,10);
  ring3.shapeColor = "yellow";
 ring2 = createSprite(110,290,55,10);
  ring2.shapeColor = "orange";
 ring1 = createSprite(110,280,35,10);
  ring1.shapeColor = "red";

}

function draw() {
  background(220);

  /*if(mousePresedOver(tower1)){
    tower1pressed = true;
  } else  {
    tower1pressed = false;
  }

  if(mousePresedOver(tower2)){
    tower2pressed = true;
  } else{
    tower2pressed = false;
  }

  if(mousePresedOver(tower3)){
    tower3pressed = true;
  }else {
    tower3pressed = false;
  }*/

  text("X " + World.mouseX +"Y " + World.mouseY, World.mouseX,World.mouseY);
  console.log("RIng1 at start"+ ring1.x + ring1.y)
  if(mousePressedOver(ring1) && ring1.x !=200){
    ring1OnTower = true
    ring1.y = 100; 
  }

  console.log("before tower pressed"+ ring1.x + ring1.y)
  if (mousePressedOver(tower2) && ring1OnTower === true/* ring1.y < 110 && ring1.x === 110*/ ){
    ring1.x = 200;
    ring1.y = 300;
  }

  console.log("before ring pressed"+ ring1.x + ring1.y)
  console.log("RIng1 at start"+ ring1.y + ring1.x)
  if(mousePressedOver(ring1) && ring1.x === 200 && ring1.y ===300){
    ring1.x = 200;
    ring1.y = 90;
  }


/*if(mousePressedOver(tower1) && ring1.y<169){
 if(ring1.y === 280){
   ring1.y = 170;
   ring1.x =150
 } else{
ring1.x = 150;

 }
}
/*if(mousePressedOver(ring2) && ring2.x<ring1.x){
  ring2.y = 200;
}
if (mousePressedOver(tower2) && ring2.x<ring1.x){
  ring2.x = 200;
  ring2.y = 280;
}
if(mousePressedOver(tower3) && ring2.x<ring1.x){
  ring2.x = 250;
  ring2.y = 280;
}
/*if(mousePressedOver(tower1) && ring2.y==260) {
  ring2.x = 150;
  ring2.y = 280;
}
if (mousePressedOver(ring3)){
  ring3.y =200
}
if (mousePressedOver(tower2) && ring3.y==280){
  ring3.x = 200;
  ring3.y = 280;
}
if(mousePressedOver(tower3) && ring3.y==280){
  ring3.x = 250;
  ring3.y = 280;
}
if(mousePressedOver(tower1) && ring3.y==280){
  ring3.x = 150;
  ring3.y = 280;
}*/


  drawSprites();
}

