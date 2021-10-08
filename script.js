var [xpos, ypos, xspeed, yspeed] = [200, 225, 0, 4];
var pipe, pipe2, pipe3;
var gameState = 1;

var pipes = [];
function setup() {
  createCanvas(600, 400);
}


function draw() {
  background(0);

  fill("green");
  rect(xpos, ypos, 25, 50);

  if (frameCount % 100 == 0) {
    pipes.push(new Pipe(700));
    console.log("NIEUWE PIPE!")
  }


  pipes.forEach((p) => {
    p.draw()
    p.checkCollision();
  });

  if (xpos >= 0 && xpos + 50 <= 500) xpos += xspeed;
  if (ypos >= 0 && ypos + 50 <= 400) ypos += yspeed;
}

function keyPressed() {
  if (keyCode == 32) {
    ypos -= 80;
  }
}

class Pipe {
  constructor(startx) {
    this.x = startx;
    this.h = random(height / 4)
    this.c = "green";
    this.w = 50
    this.y = 150
  }


  draw() {
    fill(this.c);
    rect(this.x, 0, this.w, this.h);

    this.x = this.x - 5;
    rect(this.x, this.h + 150, 50, 400);
  }

  checkCollision() {
    if (xpos - 25 > this.x && xpos + 25 > this.x + this.w) {
       this.c = "red";
      if (ypos > this.h && ypos + 50 < this.h + 150) {
        this.c = "red";
      }
    }
  }
}