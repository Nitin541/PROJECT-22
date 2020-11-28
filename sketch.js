var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var invisibleGround, drop;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	drop = false;

	invisibleGround = createSprite(width/2,100,width,10);
	invisibleGround.visible = false;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(80, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	
	engine = Engine.create();
	world = engine.world;

	 var packageBody_options = {
		 isStatic: true,
		 restitution: 0.4,
		 friction: 1,
		 frictionAir: 0.01	
	 }

	 

	packageBody = Bodies.circle(width/2 , 200 , 5, packageBody_options);
	World.add(world, packageBody);
				 
	helicopterSprite.velocityX = 4;
	
	 console.log(packageBody.friction);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if ( drop === false ) { 
	  packageSprite.x = helicopterSprite.x;
  }

  packageSprite.y= packageBody.position.y;

  

  keyPressed();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
	drop = true;
	
	Body.setStatic(packageBody, false);
    
  }
}



