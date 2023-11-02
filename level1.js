function drawMap() {
  createCanvas(400, 124);
  rectMode(CENTER);
  strokeWeight(4);
  stroke(color("blue"));

  noFill();
  rectMode(CORNER);
  stroke(color("blue"));
  strokeWeight(5);
  rect(0, 0, width, height);

  fill(color("green"));
  noStroke();
  rect(320, 21, 70, 75);
}
function setup() {
  robot = new Robot(30, 60, 0, 60);

  // Goal: Drive the robot into the green square!

  /*
  To tell the robot to drive forward we use
    robot.move(50,0);
  Increasing the first number will make the robot drive further
  Leave the second number on zero for now
  */

  robot.move(10, 0);

  /**
  // Solution
  robot.move(150,0);
  */
}
