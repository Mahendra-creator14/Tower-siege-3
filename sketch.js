var ground, engine,world,base
var block1,block2,block3,block4,block4,block5,block6,block7, block8,block9,block10,block11,block12,block13,block14,
block15,block16,block17;
var polygon;
var sling1
var score = 0;

const Bodies = Matter.Bodies
const Engine = Matter.Engine
const World  = Matter.World
const Constraint = Matter.Constraint

function setup(){
    createCanvas(1600,758)
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(590,700,500,25)
    base = new Ground(800,750,1600,10)

    polygon = new Polygon(100,600,60)

    sling1 = new SlingShot(polygon.body,{x:100,y:600})

    //top
    block1 = new Box(540,550,30,40)
    //level1
    block2 = new Box(510,590,30,40)
    block3 = new Box(540,590,30,40)
    block4 = new Box(570,590,30,40)
    //level2
    block5 = new Box(480,630,30,40)
    block6 = new Box(510,630,30,40)
    block7 = new Box(540,630,30,40)
    block8 = new Box(570,630,30,40)
    block9 = new Box(600,630,30,40)
    //level3
    block10 = new Box(450,670,30,40)
    block11 = new Box(480,670,30,40)
    block12 = new Box(510,670,30,40)
    block13 = new Box(540,670,30,40)
    block14 = new Box(570,670,30,40)
    block15 = new Box(600,670,30,40)
    block16 = new Box(630,670,30,40)
}
 
function draw(){
 background("lavender")

 Engine.update(engine)

 text("Score :"+score,100,100)

 
block1.display()

block2.display()
block3.display()
block4.display()

block5.display()
block6.display()
block7.display()
block8.display()
block9.display()

block10.display()
block11.display()
block12.display()
block13.display()
block14.display()
block15.display()
block16.display()

block1.score()
block2.score()
block3.score()
block4.score()
block5.score()
block6.score()
block7.score()
block8.score()
block9.score()
block10.score()
block11.score()
block12.score()
block13.score()
block14.score()
block15.score()
block16.score()

ground.display()

polygon.display()

sling1.display()

base.display()
 }
 function mouseDragged(){
Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
 }

 function mouseReleased(){
  sling1.fly()
 }

