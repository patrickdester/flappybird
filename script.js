var [xpos, ypos, xspeed, yspeed, acc] = [200, 225, 0, 0, 0.1];
var pipe, pipe2, pipe3;
var gameState = 1;
var x = 0;
var pipes = [];
function setup() {
  createCanvas(600, 400);
}


function draw() {

  text("gameState" + gameState, 25, 25);

  if (gameState == 0) {
    menu();
  }

  if (gameState == 1) {
    game();
  }

  if (gameState == 2) {
    gameOver();
  }
}


function menu() {
  background("#ababab");
  text("MENU", 25, 45);
  text("1. menu", 25, 65);
  text("2. start game", 25, 85);
  text("3. game over", 25, 105);
}

function game() {
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

  if (xpos >= 0 && xpos + 50 <= 500) {
    xpos += xspeed
  }
  if (ypos >= 0 && ypos + 50 <= 400) {
    if (yspeed < 5) {
      yspeed += acc;
    }

    ypos += yspeed
  };
}

function gameOver() {
  background("black");
  text("GAME OVER", 25, 45);
  x = 0;
}

function keyPressed() {
  if (keyCode == 32) {
    ypos -= 80;
  }

  if (keyCode == 49) {
    gameState = 0;
  }

  if (keyCode == 50) {
    gameState = 1;
  }

  if (keyCode == 51) {
    gameState = 2;
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
    if (xpos + 25 > this.x && 25 < this.x + this.w) {
      //this.c = "orange";

      ///console.log(ypos < this.h, ypos + 50 > this.h + 150)
      if (ypos + 50 > this.y && ypos > this.y + this.h) {
       // this.c = "red";
        gameState = 2;
      }
    }
  }
}