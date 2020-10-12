//CALL ENGINE,WORLD AND BODY FROM MATTER LIBRARY
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//VARIABLES
var engine , world ,box1,box2,ground;
var ball;
function setup() {
  createCanvas(400,400);
//creating the engine
engine = Engine.create();
//connect the world to the engine
world = engine.world;
//creating boxes
box1 = new Box(220,50,50,100);
box2 = new Box(200,180,50,60);
ground = new Ground(200,390,400,20);
}


function draw() {
  background(255,255,255);   
  Engine.update(engine);   
 box1.display();
 box2.display();
 ground.display();

}
