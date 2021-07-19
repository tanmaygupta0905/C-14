var garden,rabbit;

var gardenImg,rabbitImg;

var appleImage;

var leaves,leaveImg;



function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");

  appleImage = loadImage("apple.png");

  leaveImg = loadImage("leaf.png");  
}

function setup(){
  
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}
function draw() {


  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x=World.mouseX;

  spawnapple();
  spawnleaves();


  drawSprites();
}


function spawnapple(){
 if(frameCount % 80 ===0){
  apple = createSprite(100,100,20,20);
  apple.velocityY=4;
  apple.addImage(appleImage);
  apple.scale=0.1; 
  apple.y=Math.round(random(1,2));
  console.log(frameCount);

 rabbit.depth = apple.depth
 apple.depth = apple.depth + 1;

 apple.lifetime = 100;
}
}

function spawnleaves(){
  if(frameCount % 130===0){
    leaves = createSprite(300,100,20,20);
    leaves.velocityY=4;
    leaves.addImage(leaveImg);
    leaves.scale=0.1;
    leaves.y=Math.round(random(1,2));

    leaves.lifetime=100;
  }
}