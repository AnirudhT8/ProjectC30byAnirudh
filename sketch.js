const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;

var bird, slingShot;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    pig3 = new Pig(810,370,70,70);
    log3 =  new Log(865,325,300,70,70);
    pig1 = new Pig(810, 390,70,70);
    log1 = new Log(810,385,300,70,70);
    box5 = new Box(759,270,70,70);  
    box3 = new Box(700,390,70,70);
    box4 = new Box(911,390,70,70);
    log4 = new Log(759,370,70,70);
    log5 = new Log(865,390,70,70);

  
  

    bird = new Bird(200,50);

    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background("yellow");
    Engine.update(engine);
    strokeWeight(4);
   
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();

    slingshot.display();


}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY}); 
}


function mouseReleased(){
    slingshot.fly();
}



function keyPressed(){
    if (keyCode === 32){
        slingshot.attatch(bird.body);
    }
    }