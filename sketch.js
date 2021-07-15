var starImg,bgImg;
var star, starBody;
var fairy,fairyImg;
var fairyVoice;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    fairyImg=loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
    //fairyVoice=loadSound("sounds/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//fairyVoice.play();


	fairy = createSprite(130,520);
    fairy.velocityX=0;
	fairy.addAnimation("fairyFlying",fairyImg);
	fairy.scale = 0.25;
   
   
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  fairy.velocityX=0;
  

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  

  if(starBody.position.y>470)
  {
	Body.setStatic(starBody,true)  
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === RIGHT_ARROW) 
	{
   fairy.velocityX=21;
	}

	if (keyCode === LEFT_ARROW) 
	{
   fairy.velocityX=-20;
	}


	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}


	
}
