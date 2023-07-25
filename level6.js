function drawMap() {
  createCanvas(600, 600);
  
  noFill();
  rectMode(CORNER);
  stroke(color('blue'));
  strokeWeight(5);
  rect(0,0,width, height);
  
  rectMode(CENTER);
  
  fill(color('purple'));
  noStroke();
  rect(202, 580-l, 400,40);
  rect(398, 20+r, 400,40);

  fill(color('blue'));
  stroke(color(0, 0, 255));
  strokeWeight(4);
  
  line(4,600-l,400,600-l);
  line(400,150+r,400,600-l);
  
  line(200,0,200,450-l);
  line(200,0+r,596,0+r);
  
  fill(color('green'));
  noStroke();
  rect(500, 550, 70,70);
}

function setup(){
  l = random(0,200);
  r = random(0,200);
  robot = new Robot(100, 60, Math.PI/2, 60);

  // Goal: Drive the robot into the green square
  //       but avoid the blue lines!
  //       (The map changes every time!)

  /* 
  A reminder:
  robot.move(100,5); will tell the robot to drive forward
      while turning right. -5 would make it turn left
    
  To make the robot repeat a set of steps we can use a
  while loop. Everything between the braces { } will be
  repeated while the condition between the parentheses ( )
  is true. In this case the robot will repeat whatever is
  inside until it either detects a purple area or it
  runs out of battery

  Make sure you don't run the code if you have nothing inside
  the while loop
  */

  while (!robot.detectColour(color("purple")) && robot.hasBattery()) {
    robot.move(1,0);
  }


  /**
  // Solution
  while (!robot.detectColour(color("purple")) && robot.hasBattery()) {
    robot.move(1,0);
  }
  robot.move(20,-8);
  robot.move(70,0);
  robot.move(22,-7);
  
  while (!robot.detectColour(color("purple")) && robot.hasBattery()) {
    robot.move(1,0);
  }
  robot.move(20,8);
  robot.move(70,0);
  robot.move(22,7);
  
  while (!robot.detectColour(color("green")) && robot.hasBattery()) {
    robot.move(1,0);
  }
  */
}

