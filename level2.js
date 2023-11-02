function drawMap() {
  createCanvas(400, 400);

  rectMode(CORNER);
  noFill();
  stroke(color("blue"));
  strokeWeight(4);
  rect(0, 100, 250, height);

  fill(color("purple"));
  stroke(color("blue"));
  strokeWeight(5);
  noFill();
  rect(0, 0, width, height);

  rectMode(CENTER);
  fill(color("green"));
  noStroke();
  rect(330, 350, 70, 70);
}

function setup() {
  robot = new Robot(30, 60, 0, 60);

  // Goal: Drive the robot into the green square
  //       but avoid the blue lines!

  /*
  To tell the robot to drive forward we use
    E.g. robot.move(50,0); // drives a distance of 50
  Increasing the first number will make the robot drive further
   
  To tell the robot to turn we change the second number
    E.g. robot.move(100,2); // turns right
    E.g. robot.move(100,-2); // turns left
  A positive number will make the robot turn right whereas
  a negative number will make the robot turn left

  Writing multiple move commands will tell the robot to do
  them in one after the other, line by line.
    E.g. robot.move(100,0); // Drive forward
         robot.move(10,0.5); // Then turn right slightly
  */

  robot.move(10, 0);

  /**
  // Solution
  robot.move(102, 0);
  robot.move(60, 2.5);
  robot.move(108, 0);
  */
}
