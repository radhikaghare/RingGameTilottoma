var tower1,tower2,tower3,base;
var ring1,ring2,ring3;

var tower1pressed;

function setup() {
  createCanvas(500, 500);
 tower1 = createSprite(150,235,10,100);
  tower1.shapeColor = "brown";
 tower2 = createSprite(200,235,10,100);
  tower2.shapeColor = "brown";
 tower3 = createSprite(250,235,10,100);
  tower3.shapeColor = "brown";
 base = createSprite(200,288,135,10);
  base.shapeColor = "brown";
 ring3 = createSprite(150,280,35,10);
  ring3.shapeColor = "yellow";
 ring2 = createSprite(150,270,26,10);
  ring2.shapeColor = "orange";
 ring1 = createSprite(150,260,20,10);
  ring1.shapeColor = "red";

}

function draw() {
  background(220);

  if(mousePressedOver(ring1) && ring1.x === 150){
    ring1.y = 170; 
  }

if(mousePressedOver(tower2) /*&& ring1.y==240*/){
  console.log("in tower2 Line 30 ring1.y " + ring1.y)
  if(ring1.y===280) {
    console.log("inside222")
    ring1.y = 190;

  }
  else {
    console.log("inside ring1.y " + ring1.y)
    ring1.x = 200;
    ring1.y = 280;
    
  
  } 

}
if(mousePressedOver(tower3) ){
  if(ring1.y==280) {
  console.log("in tower3 Line 35")
  ring1.x = 250;
  ring1.y = 170;
  } else {
    ring1.x = 250;
  ring1.y = 280;
  }
}
if(mousePressedOver(tower1) && ring1.y<169){
  ring1.x = 150;
  ring1.y = 280;
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
