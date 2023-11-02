function drawMap() {
  createCanvas(500, 400);
  fill(color("blue"));
  rectMode(CENTER);
  stroke(color(0, 0, 255));
  strokeWeight(4);

  line(width / 2, 0, width / 2, 280);

  noFill();
  rectMode(CORNER);
  stroke(color("blue"));
  strokeWeight(5);
  rect(0, 0, width, height);

  fill(color("green"));
  noStroke();
  rect(350, 60, 70, 70);
}
function setup() {
  robot = new Robot(150, 60, 0, 60);

  // Goal: Drive the robot into the green square
  //       but avoid the blue lines!

  /*
  To tell the robot to drive forward we use
    E.g. robot.move(50,0); // drives a distance of 50
  Increasing the first number will make the robot drive further
   
  To tell the robot turn we change the second number
    E.g. robot.move(100,2); // turns right
    E.g. robot.move(100,-2); // turns left
  Using a negative number will tell the robot to turn
  left instead using a positive

  Writing multiple move commands will tell the robot to do
  them in sucession.
    E.g. robot.move(100,0); // Drive forward
         robot.move(10,0.5); // Then turn right slightly
  */

  /**
  // Solution
  robot.move(10,15);
  robot.move(140,0);
  robot.move(10,-15);
  robot.move(50,0);
  robot.move(80,-2);
  robot.move(85,0);
  */
}
