const IMAGE_URL = "https://i.imgur.com/UR48GF9.jpeg";
const IMAGE_WHEEL = "https://i.imgur.com/5tLM8PM.png";
const IMAGE_TARGET = "https://i.imgur.com/ai0B9Ny.png";
const IMAGE_BALL = "https://i.imgur.com/zaeHvDW.png";
const IMAGE_CAMERA = "https://i.imgur.com/SCgoJqc.png";
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
  this._render = function render() {
    push();
    translate(this.x, this.y);
    imageMode(CENTER);
    image(imgBall, 0, 0, 70, 70);
    pop();
  };
  this._move = function move() {
    this.x += this.vx * timeSpeed;
    this.y -= this.vy * timeSpeed;
    this.vy -= 9.81 * timeSpeed;
  };

  this.SetVelocity = function setVelocity(xVelo, yVelo) {
    var maxVelocity = 200;
    this.vx = xVelo;
    this.vy = yVelo;
    if (xVelo > maxVelocity) {
      this.vx = maxVelocity;
    }
    if (yVelo > maxVelocity) {
      this.vy = maxVelocity;
    }
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

function Camera(x, y, sx, sy) {
  this.x = x;
  this.y = y;
  this.sx = sx;
  this.sy = sy;

  this._render = function render() {
    push();
    translate(this.x, this.y);
    rotate(270);
    imageMode(CENTER);
    image(imgCamera, 0, 0, this.sx, this.sy);
    pop();
  };

  this._giveAngle = function giveAngle(x, y) {
    if (this.y < y) {
      return atan(abs(x - this.x) / abs(y - this.y));
    } else {
      return 180 - atan(abs(x - this.x) / abs(y - this.y));
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
    camera1._render();
    camera2._render();
    target._checkHit(ball.x, ball.y);
    if (win) {
      console.log("You Win !!!");
    }
  } else {
    target._checkHit(ball.x, ball.y);
  }

  if (fps > 20 / timeSpeed && gamePause == true) {
    gamePause = false;
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
  imgWinScreen = loadImage(IMAGE_URL);
  imgCamera = loadImage(IMAGE_CAMERA);
  createCanvas(canvasWidth, canvasHeight);

  targetx = random(wheelSpawnX + 100, canvasWidth - 50);
  if (targetx < 300) {
    targety = random(0, canvasHeight - 300);
  } else {
    targety = random(0, canvasHeight - 50);
  }

  wheel = new Wheel(100, canvasHeight - 50, 300);
  target = new Target(targetx, targety, 70, 70);
  ball = new Ball(ballSpawnX, ballSpawnY);
  camera1 = new Camera(100, canvasHeight - 335, 20, 20);
  camera2 = new Camera(100, canvasHeight - 185, 20, 20);

  camera1Angle = camera1._giveAngle(target.x, target.y);
  camera2Angle = camera2._giveAngle(target.x, target.y);

  // This is HARD MODE! The target is in a random position each time.
  // Use camera1Angle and camera2Angle to find the position
  // of the target (using trigonometry) and then fire the ball

  // The cameras are 200 units apart, camera2 is the bottom one and
  // 50 units above the ball launch position

  // Additionally, p5.js has an inverse y direction, y being at 0 at
  // the top instead of bottom meaning you have to multiply the y value
  // by -1 at the very end

  var xVelocity = 40;
  var yVelocity = 40;

  ball.SetVelocity(xVelocity, yVelocity);
}
