
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;
var bob1,bob2,bob3, bob4,bob5, roofObject
var rope1,rope2,rope3, rope4,rope5;

function preload()
{
 bg= loadImage("background.png");
}

function setup() {
	createCanvas(800,650);
	rectMode(CENTER);

	backgrounds =createSprite(400,325,600,400);
	backgrounds.addImage(bg);
	//backgrounds.scale=1;
	//backgrounds.x=backgrounds.width/2;

	engine = Engine.create();
	world = engine.world;

	roofObject=new Roof(380,150,230,30);

	bobDiameter=40;

	var p1=width/2;
	var p2=height/4+500;
	bob1=new Ball(260,400,40);
	bob2=new Ball(330,400,40);
	bob3=new Ball(390,400,40);
	bob4=new Ball(450,400,40);
	bob5=new Ball(510,400,40);
	
	
	//Create a Ground
	
	rope1=new rope(bob1.body,roofObject.body,-bobDiameter*2, 0)
	rope2=new rope(bob2.body,roofObject.body,-bobDiameter*1, 0)
	rope3=new rope(bob3.body,roofObject.body,0, 0)
	rope4=new rope(bob4.body,roofObject.body,bobDiameter*1, 0)
	rope5=new rope(bob5.body,roofObject.body,bobDiameter*2, 0)
	
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("white")
  backgrounds.display();
  roofObject.display();
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
 }

 function keyPressed() {
 if (keyCode === UP_ARROW) {

 Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-40,y:-30});

 }
 }









