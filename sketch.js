//step1-name spacing/nickname
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld,box;
var ground,ball;

function setup() {
  createCanvas(400,400);

  //step2
  myEngine = Engine.create();
  myWorld = myEngine.world;

  //step3
  box = Bodies.rectangle(200,200,50,50);
  World.add(myWorld,box);
  
  //step6 - tweaking the values of the properties
  var ground_options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,380,400,20,ground_options);
  World.add(myWorld,ground);

  var ball_options = {
    restitution:1
    }
  ball = Bodies.circle(100,100,30,ball_options);
  World.add(myWorld,ball);

  //Engine.run(myEngine)
}

function draw() {
  background("black");  
  
  console.log(box.position.y);

  //step4
  Engine.update(myEngine);

  //step5 displaying the body/box
  fill("skyblue");
  rectMode(CENTER)
  rect(box.position.x,box.position.y,50,50);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
}