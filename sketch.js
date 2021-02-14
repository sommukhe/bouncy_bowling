//implement matter.js into code - DONE
//create class for bowling ball  - DONE
//create class for pins - DONE
//create ground - DONE
//create objects for bowling ball and pins
//add constraint to bowling ball and a point in the screen
//load images + background Image
//add mouseDragged and mouseRelease functions to launch ball
//add scoring system with velocity- optional
//reset with gameState
//add some API

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, rubberband;
var score;


function setup(){
    var canvas = createCanvas(800,530);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,510,1000,90);
    ball = new Ball(600,480,30,30);
    pin1 = new Pin(200,475,30,30);
    pin2 = new Pin(170,430,30,30);
    pin3 = new Pin(170,430,30,30);
    pin4 = new Pin(140,420,30,30);
    pin5 = new Pin(140,440,30,30);
    pin6 = new Pin(140,460,30,30);
    pin7 = new Pin(110,415,30,30);
    pin8 = new Pin(110,435,30,30);
    pin9 = new Pin(110,455,30,30);
    pin10 = new Pin(110,475,30,30);
    rubberband = new Sling(ball.body,{x:600,y:460});
    score = 100;
   
}
function draw(){
    background("lightblue");
    Engine.update(engine);
    ground.display();
    pin1.display();
    ball.display();
    pin2.display();
    pin3.display();
    pin4.display();
    pin5.display();
    pin6.display();
    pin7.display();
    pin8.display();
    pin9.display();
    pin10.display();
    rubberband.display();
    textSize(20);
    text("Drag and release the ball to lauch it. Try to push all pins out of the canvas", 50, 150)
    text( "Click space to lauch the ball again.", 50,180)
    text("Score:"+score, 50, 120);
    timer ();
    
}
//dragging the ball
function mouseDragged (){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
//realeasing the ball from sling
function mouseReleased (){
    rubberband.fly();
}

function keyPressed(){
    if(keyCode === 32){
       Matter.Body.setPosition(ball.body, {x:600,y:480})
       rubberband.attach(ball.body);
       score = score - 10;
       
    }
}
async function timer (){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    text(datetime, 500, 120);
    
}
