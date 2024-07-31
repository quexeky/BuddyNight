const IMAGE_FROG = "https://i.imgur.com/UR48GF9.jpeg";
const IMAGE_WHEEL = "https://i.imgur.com/5tLM8PM.png";
const IMAGE_TARGET = "https://i.imgur.com/ai0B9Ny.png";
const IMAGE_BALL = "https://i.imgur.com/zaeHvDW.png";

var inWall = false;

var canvasHeight = 600;
var canvasWidth = 700;

var ballSpawnX = 20;
var ballSpawnY = canvasHeight - 120;

var wheelSpawnX = 100;
var wheelSpawnY = canvasHeight - 50;

var timeSpeed = 0.4;
var win = false;
var gamePause = true;

function Wheel(x, y, v) {
  this.x = x;
  this.y = y;
  this.v = v;

  this.a = 0;

  this._render = function render() {
    push();
    translate(this.x, this.y);
    rotate(this.a);
    imageMode(CENTER);
    image(imgWheel, 0, 0, 100, 100);
    pop();
  };

  this._move = function move() {
    this.a += (this.v / 15) * timeSpeed;
  };
}

function Ball(x, y) {
  this.x = x;
  this.y = y;
  var vx = 0;
  var vy = 0;

  var spinVelocity = 0;
  var currentSpin = 0;

  this._render = function render() {
    push();
    translate(this.x, this.y);
    rotate(currentSpin);
    imageMode(CENTER);
    image(imgBall, 0, 0, 70, 70);
    pop();
  };

  this._move = function move() {
    this.x += this.vx * timeSpeed;
    this.y -= this.vy * timeSpeed;

    this.currentSpin += this.spinVelocity * timeSpeed;
    this.spinVelocity /= 0.1 * timeSpeed;

    this.vy -= 9.81 * timeSpeed;
  };

  this.SetVelocity = function setVelocity(direction, magnitude) {
    var maxVelocity = 100;

    if (magnitude > maxVelocity) {
      xVelocity = maxVelocity * cos(direction);
      yVelocity = maxVelocity * sin(direction);
      this.vx = xVelocity;
      this.vy = yVelocity;
    } else {
      xVelocity = magnitude * cos(direction);
      yVelocity = magnitude * sin(direction);
      this.vx = xVelocity;
      this.vy = yVelocity;
    }
  };

  this._spin = function spin(_spin) {
    this.spinVelocity += _spin;
  };
}

function Target(x, y, sx, sy) {
  this.x = x;
  this.y = y;
  this.sx = sx;
  this.sy = sy;

  this._render = function render() {
    push();
    translate(this.x, this.y);
    imageMode(CENTER);
    image(imgTarget, 0, 0, this.sx, this.sy);
    pop();
  };

  this._checkHit = function checkHit(playerX, playerY) {
    if (
      sqrt(
        (this.x - playerX) * (this.x - playerX) +
          (this.y - playerY) * (this.y - playerY)
      ) < 70 ||
      win == true
    ) {
      win = true;
      imageMode(CENTER);
      image(
        imgWinScreen,
        canvasWidth / 2,
        canvasHeight / 2,
        canvasWidth,
        canvasHeight
      );
    }
  };
}

function Wall(x, y, sx, sy) {
  this.x = x;
  this.y = y;
  this.sx = sx;
  this.sy = sy;

  this._render = function render() {
    push();
    imageMode(CENTER);
    rect(this.x, this.y, this.sx, this.sy);
    pop();
  };

  this._checkHit = function checkHit(playerX, playerY) {
    if (
      playerX > this.x - 35 &&
      playerX < this.x + this.sx + 35 &&
      playerY > this.y - 35 &&
      playerY < this.y + 35 &&
      !inWall
    ) {
      inWall = true;

      if (playerY < this.y) {
        ball.vy *= -1;
      } else {
        ball.vx *= -1;
      }

      console.log("HIT");
    } else {
      //inWall = false;
    }
  };
}

let fps = 0;
function draw() {
  fps += 1;
  background(220);

  wheel._move();
  if (!gamePause) {
    ball._move();
  }

  if (!win) {
    wheel._render();
    ball._render();
    target._render();
    wall._render();
    wall._checkHit(ball.x, ball.y);
    target._checkHit(ball.x, ball.y);
    if (win) {
      console.log("You Win !!!");
    }
  } else {
    target._checkHit(ball.x, ball.y);
  }

  if (fps > 20 / timeSpeed && gamePause == true) {
    gamePause = false;
    ball._spin(10);
  } else {
    ball.x += (timeSpeed * abs(ballSpawnX - wheelSpawnX)) / 20;
    ball.y += (-timeSpeed * abs(ballSpawnY - wheelSpawnY + 85)) / 20;
  }
}

function setup() {
  angleMode(DEGREES);
  imgWheel = loadImage(IMAGE_WHEEL);
  imgBall = loadImage(IMAGE_BALL);
  imgTarget = loadImage(IMAGE_TARGET);
  imgWinScreen = loadImage(IMAGE_FROG);
  createCanvas(canvasWidth, canvasHeight);

  var targetx = 540;
  var targety = 300;

  wheel = new Wheel(100, canvasHeight - 50, 300);
  wall = new Wall(400, 250, 50, 400);
  target = new Target(targetx, targety, 70, 70);
  ball = new Ball(ballSpawnX, ballSpawnY);

  // Goal: Launch the ball over the wall into the target!

  // Alter degrees and magnitude in ball.SetVelocity() to fire the ball
  // There is a max magnitude of 100
  // The win screen is a frog :)

  // Write the code UNDERNEATH HERE:

  var _degrees = 45;
  var _magnitude = 20;

  ball.SetVelocity(_degrees, _magnitude);
}
