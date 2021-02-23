const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15;
var backgroundImg,platform;
var  slingShot,slingShot1,slingShot2;
var stand1,stand2;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(450,height,900,20);
    stand1 = new Stand(390, 300, 250, 10);
stand2 = new Stand(700,200,200,10)

  block1 = new Block(300,275,30,40);
    block2 = new Block(330,275,30,40);
   
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
  

    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);

    block8 = new Block(330,235,30,40)
    block9 = new Block(360,235,30,40)
    block10 = new Block(390,235,30,40)
    block11= new Block(420,235,30,40)
    block12 = new Block(450,235,30,40)
    block13 = new Block(360,195,30,40)
    block14 = new Block(390,235,30,40)
    block15 = new Block(420,235,30,40)
ball = Bodies.circle(10, 300, 40);
World.add(world,ball)
    

    slingshot = new SlingShot(this.ball,{x:200, y:50});

}

function draw(){
    background("pink");
    Engine.update(engine);
    strokeWeight(4);
    block1.display();
    block2.display();

    ground.display();
    stand1.display();
    stand2.display();

    block3.display();
    block4.display();
   

    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();

    //ball.display();
   // platform.display();
    
    slingshot.display();    
ellipseMode(CENTER)
ellipse(this.ball.position.x,this.ball.position.y,40,40)
   // ball.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
