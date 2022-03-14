var ground, groundimage
var invisibleground
var edges
var trex ,trexrunning;
function preload(){
    trexrunning=loadAnimation("trex1.png" , "trex3.png" , "trex4.png");

  groundimage=loadImage("ground2.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(40,150,20,20)
  trex.addAnimation("running" , trexrunning)
  trex.scale=0.5

  edges=createEdgeSprites();

  ground=createSprite(200,180,400,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  ground.addImage(groundimage)

  invisibleground=createSprite(200,190,400,10)
  invisibleground.visible=false
 }


function draw(){
    background("white")
    if (keyDown("space")&&trex.y>=150){
    
      trex.velocityY=-10  
    }
    trex.velocityY=trex.velocityY+0.8

  if (ground.x<30)
  {
    ground.x=ground.width/2
  }
    trex.collide(invisibleground)
  drawSprites();
}
