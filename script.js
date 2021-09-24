function setup() {
  createCanvas(600, 400);
}
 
var [xpos, ypos, xspeed, yspeed] = [125, 225, 0, 10];
 
function draw() {
  background(0);
  
  fill(0, 255, 0);
  circle(xpos, ypos, 25, 50);
  
  if(xpos >= 0 && xpos + 50 <= 500) xpos += xspeed;
  if(ypos >= 0 && ypos + 50 <= 400) ypos += yspeed;
}
 
function keyPressed() {
  switch(keyCode) {
    case 37:
    case 65:
      xspeed = -2;
      break;
    case 39:
    case 68:
      xspeed = 2;
      break;
    case 38:
    case 87:
      yspeed = -2;
      break;
    case 40:
    case 83:
      yspeed = 2;
      break;
  }
}
 
function keyReleased() {
  switch(keyCode) {
    case 37:
    case 65:
      xspeed = 0;
      break;
    case 39:
    case 68:
      xspeed = 0;
      break;
    case 38:
    case 87:
      yspeed = 0;
      break;
    case 40:
    case 83:
      yspeed = 0;
      break;
   }
}
