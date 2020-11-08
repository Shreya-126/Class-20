var fixedRect;
var movingRect;


function setup() {
  createCanvas(800,400);
fixedRect = createSprite(200,200,40,50);
fixedRect.shapeColor = "green";
fixedRect.debug=true;

movingRect = createSprite(400,300,50,40);
movingRect.shapeColor = "red";
movingRect.debug=true;
}

function draw() {

  background(0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  console.log(movingRect.x - fixedRect.x);

  //x2-x1 = value;
  //movingRect.x - fixedRect.x = fixedRect.width/2 + movingRect.width/2
  //movingRect.x - fixedRect.x = 40/2 + 50/2
  //movingRect.x - fixedRect.x = 20 +25 = 45;


  if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 &&  
    fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2){
   movingRect.shapeColor = "yellow";
   fixedRect.shapeColor = "yellow";
  }

else{
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "green";
}
  drawSprites();
}