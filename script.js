var [xpos, ypos, xspeed, yspeed] = [125, 225, 0, 4];
var pipe, pipe2, pipe3;


var pipes = [];
function setup() {
  createCanvas(600, 400);
}


function draw() {
  background(0);
  
  fill(255, 0, 0);
  circle(xpos, ypos, 25, 50);

  if(frameCount % 250 == 0){   
    pipes.push(new Pipe(700));
    console.log("NIEUWE PIPE!")
  }

  
  
  pipes.forEach(p => p.draw());

  if(xpos >= 0 && xpos + 50 <= 500) xpos += xspeed;
  if(ypos >= 0 && ypos + 50 <= 400) ypos += yspeed;
}
 
function keyPressed() { 
 if(keyCode == 32){
   ypos -=75;
 }
} 

class Pipe {
  constructor(startx){
    this.x = startx;
    this.h = random(height/3)
  }

  draw(){
    rect(this.x, 0, 50, this.h);
    this.x=this.x-1;
    rect(this.x, this.h + 150, 50, 400)

  }  
}
