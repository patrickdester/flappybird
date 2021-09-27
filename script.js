var [xpos, ypos, xspeed, yspeed] = [125, 225, 0, 4];
var pipe, pipe2, pipe3;

function setup() {
  createCanvas(600, 400);
  pipe  = new Pipe(400);
  pipe2 = new Pipe(700);
  pipe3 = new Pipe(1000);
}
 


function draw() {
  background(0);
  
  fill(0, 255, 0);
  circle(xpos, ypos, 25, 50);
  
  pipe.draw();
  pipe2.draw();
  pipe3.draw();

  if(xpos >= 0 && xpos + 50 <= 500) xpos += xspeed;
  if(ypos >= 0 && ypos + 50 <= 400) ypos += yspeed;
}
 
function keyPressed() { 
 if(keyCode == 32){
   ypos -=100;
 }
} 

class Pipe {
  constructor(startx  ){
    this.x = startx;
  }

  draw(){
    rect(this.x, 0, 50, 80);
    this.x=this.x-1;
  } 
}
