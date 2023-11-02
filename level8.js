function drawMap() {
  createCanvas(600, 600);
  rectMode(CENTER);

  noStroke();

  fill(color("purple"));
  rect(width / 2, height / 2, width, height);

  fill(color("white"));
  rect(width / 2, height / 2, width - 20, height - 20);

  fill(color("green"));
  rect(targetX, targetY, 70, 70);
}

const LEFT = true;
const RIGHT = false;
function setup() {
  targetX = random(70, 600 - 70);
  targetY = random(70, 600 - 70);
  robot = new Robot(50, 50, 0, 60);

  // Goal: Drive the robot into the green square
  //       (It spawns in a random position!)

  /*
  This while loop will tell the robot to repeat whatever
  is inside until either it detects the green square or
  it runs out of battery

  Make sure you don't run the code if you have nothing inside
  the while loop
  */

  while (!robot.detectColour(color("green")) && robot.hasBattery()) {
    robot.move(1, 0);
  }

  /**
  // Solution
  // With the efficiency of a robotic vacuum
  while (!robot.detectColour(color("green")) && robot.hasBattery()) {
    if (robot.detectColour(color("purple"))) {
      robot.move(-20,0);
      robot.move(10,20);
    } else {
      robot.move(1,0);
    }
  }
  */

  /**
  // Solution
  // radial scan
  let count = 0; // Keep track of how far we drove
  while (!robot.detectColour(color("green")) && robot.hasBattery()) {
    if (robot.detectColour(color("purple"))) {
      robot.move(-count,0);      
      robot.move(1,10);
      count = 0;
    } else {
      robot.move(1,0);
      count = count + 1;
    }
  }
  */

  /**
  // Solution
  // Zig zag/ left to right, top to bottom
  let left = false; // keep track of which way we should turn
  while (!robot.detectColour(color("green")) && robot.hasBattery()) {
    if (robot.detectColour(color("purple"))) {
      if (left) {
        robot.move(31,-10);
        left = false;
      } else {
        robot.move(31,10);
        left = true;
      }
    } else {
      robot.move(1,0);
    }
  }
  */
}
