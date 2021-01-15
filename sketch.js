const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,log1,box3,box4,box5,log2,log3,log4,pig2,Bird;
function preload(){
    bgImage=loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground = new Ground(600,380,1250,15)
    pig1= new Pig(810,350);
    log1 = new Log(810,260,300,PI/2);
    box3=new Box(700,240,70,70);
    box4=new Box(920,240,70,70);
    box5=new Box(810,160,70,70);
log2=new Log(810,180,300,PI/2);
log3=new Log(760,120,150,PI/7);
log4=new Log(870,120,150,-PI/7);
pig2=new Pig(810,220);
Bird=new bird(300,300);

}

function draw(){
    background(bgImage);
    Engine.update(engine);
   
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    box5.display();
    log2.display();
    log3.display();
    log4.display();
    pig2.display();
    Bird.display();
}