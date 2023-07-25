
function drawMap() {
  createCanvas(500,500);
  noFill();
  rectMode(CORNER);
  stroke(color('blue'));
  strokeWeight(5);
  rect(0,0,width, height);
}

function setup(){
  robot = new Robot(250,250, 0, 50);

  // Goal: Draw something interesting!

  /*
  To make the robot repeat a set of steps we can use a
  while loop. Everything between the braces { } will be
  repeated while the condition between the parentheses ( )
  is true. In this case the robot will repeat whatever is
  inside until it runs out of battery.

  Make sure you don't run the code if you have nothing inside
  the while loop
  */

  // Currently draws a square
  while(robot.hasBattery()) {
    robot.move(5,31.5);
    robot.move(80,0);
  }
}
