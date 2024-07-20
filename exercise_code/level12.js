const MAX_PATH_LENGTH = 10000;
const TRAIL_LENGTH = 4000;
const COLOUR_SENSOR_DISTANCE = 23;
const IMAGE_URL = "https://i.imgur.com/3mBQ7z2.png";
const LVL4_MAP = "https://i.imgur.com/FbyLemC.png";

function Robot(x, y, a, s) {
  this.x = x;
  this.y = y;
  this.a = a;
  this.size = s;

  drawMap();
  this.history = [];
  this.path = [];
  this.pathDir = [];
  
  this.hasBattery = function hasBattery() {
    return this.path.length < MAX_PATH_LENGTH;
  }

  this.detectColour = function detectColour(c) {
    const at = get(x + cos(a) * COLOUR_SENSOR_DISTANCE, y + sin(a) * COLOUR_SENSOR_DISTANCE);
    //print(at, c.toString());
    return at[0] == red(c) && at[1] == green(c) && at[2] == blue(c) && at[3] == alpha(c);
  }
  
  this.move = function move(dist, turnRate) {
    for (var i = 1; i <= abs(dist); i++) {
      a += turnRate/100;
      x = x + cos(a) * 2 * Math.sign(dist);
      y = y + sin(a) * 2 * Math.sign(dist);
      this.path.push(createVector(x, y));
      this.pathDir.push(Math.sign(dist));
      if (x >= width || x <= 0 || y >= height || y <= 0 || this.path.length > MAX_PATH_LENGTH) {
        return false;
      }
    }
    return true;
  }

  this.render = function render(time) {
    if (time < this.path.length) {
      //robot
      var p = this.path[time];
      noStroke();
      fill(255, 0, 0, 255);
      ellipse(p.x, p.y, this.size/3, this.size/3);

      //trail
      for (var i = 0; i < this.history.length; i = i + 2) {
        var pos = this.history[i];
        fill(255, 0, 0, 100);
        ellipse(pos.x, pos.y, 8, 8);
      }

      this.history.push(createVector(p.x, p.y));

      //remove old history
      if (this.history.length > TRAIL_LENGTH) {
        this.history.shift();
      }
      
      translate(p.x, p.y);
      var q = this.history[this.history.length-2];
      rotate(p.sub(q).mult(this.pathDir[time]).heading());
      imageMode(CENTER);
      image(img, 0, 0, this.size, this.size);
    }
  }
  this.move(2,0); // make sure the robot is drawn
}

function preload() {
  img = loadImage(IMAGE_URL);
  map_lvl4 = loadImage(LVL4_MAP);
}

let t = 0;
function draw() {
  if (t < robot.path.length) {
    drawMap();
    robot.render(t);
    t += 1;
    redraw();
  }
}
let mapChoice = Math.floor(Math.random() * 2);
function drawMap() {
  createCanvas(600, 600);
  rectMode(CENTER);

  noStroke();

  fill(color("white"));
  rect(width / 2, height / 2, width, height);

  if (mapChoice === 0) {
    fill(color("purple"));
    rect(300, 100, 50, 50);

    fill(color("green"));
    rect(70, 100, 50, 50);
  } else {
    fill(color("red"));
    rect(300, 100, 50, 50);

    fill(color("green"));
    rect(530, 100, 50, 50);
  }
}

function setup() {
  robot = new Robot(300, 500, 4.7, 60);

  // Goal: Drive the robot into the green square

  /*
  You will need to detect the colour that appears in front of the robot
  to make a decision. If the box is purple the robot will need to drive
  left, if the box is red it will need to go right.
  
  You may need to use while(){...} loops, the robot.detectColour()
  function and if(){...} statements.
  Once you have it working, put your decision and turning code into
  a function, this will be useful for the next level.
  */

  // Your code here:
}
