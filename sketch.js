const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,ground, rope
var b1, b2, b3, b4, b5, b6, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20

function setup(){
    var canvas = createCanvas(2000,800);
    engine = Engine.create();
    world = engine.world;

ground=new Ground(600,600,1200,20)
ball=new Ball(200,200,80,80)
rope=new SlingShot(ball.body,{x:600,y:50})
b1=new Box(649,400,80,80)
b2=new Box(649,390,80,80)
b3=new Box(649,310,80,80)
b4=new Box(649,260,80,80)
b5=new Box(649,400,80,80)
b6=new Box(729,400,80,80)
b7=new Box(729,390,80,80)
b8=new Box(729,310,80,80)
b9=new Box(729,260,80,80)
b10=new Box(729,400,80,80)
b11=new Box(829,400,80,80)
b12=new Box(829,390,80,80)
b13=new Box(829,310,80,80)
b14=new Box(829,260,80,80)
b15=new Box(829,400,80,80)
b16=new Box(929,400,80,80)
b17=new Box(929,390,80,80)
b18=new Box(929,310,80,80)
b19=new Box(929,260,80,80)
b20=new Box(929,400,80,80)
}

function draw(){
 background(150)
    Engine.update(engine);
    ground.display()
    ball.display()
    rope.display()
    b1.display()
    b2.display()
    b3.display()
    b4.display()
    b5.display()
    b6.display()
    b7.display()
    b8.display()
    b9.display()
    b10.display()
    b11.display()
    b12.display()
    b13.display()
    b14.display()
    b15.display()
    b16.display()
    b17.display()
    b18.display()
    b19.display()
    b20.display()
}

function mouseDragged(){

        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});

}


