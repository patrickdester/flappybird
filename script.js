function setup() {
  createCanvas(600, 400);
}
 
var [xpos, ypos, xspeed, yspeed] = [125, 225, 0, 4];
 
function draw() {
  background(0);
  
  fill(0, 255, 0);
  circle(xpos, ypos, 25, 50);
  
  if(xpos >= 0 && xpos + 50 <= 500) xpos += xspeed;
  if(ypos >= 0 && ypos + 50 <= 400) ypos += yspeed;
}
 
function keyPressed() { 
 if(keyCode == 32){
   ypos -=100;
 }
} 