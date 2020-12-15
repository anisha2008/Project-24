
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 300);


	engine = Engine.create();
	world = engine.world;

	var options={
		isStatic:true
	}

	//Create the Bodies Here.
	 ground=createSprite(400,280,800,15)
	 ground.shapeColor="yellow"
	 World.add(world,ground)

	p1=Bodies.rectangle(600,260,180,20,options)
	p1.shapeColor="white"
	World.add(world,p1)
	
	p2=Bodies.rectangle(510,230,20,70,options)
	p2.shapeColor="white"
	World.add(world,p2)

	p3=Bodies.rectangle(690,230,20,70,options)
	p3.shapeColor="white"
	World.add(world,p3)

	GROUND1=Bodies.rectangle(400,280,800,15,options)
	World.add(world,GROUND1)

    c1=new Anisha(100,250,50)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  rect(GROUND1.position.x,GROUND1.position.y,800,15)
 fill("white")
  rect(p1.position.x,p1.position.y,180,20)
  fill('white')
  rect(p2.position.x,p2.position.y,20,70)
  fill("white")
  rect(p3.position.x,p3.position.y,20,70)
  
  
if(keyDown(UP_ARROW)){
	Matter.Body.applyForce(c1.body,c1.body.position,{x:12,y:-13})
}
  c1.display()
  drawSprites()
 
}



