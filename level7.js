function drawMap() {
  createCanvas(600, 600);
  rectMode(CENTER);
  
  noStroke();
  
  fill(color('purple'));  
  rect(width/2, height/2, width, height);

  fill(color('white'));  
  circle(width/2, height/2, width-20, height-20);

  fill(color('green'));
  rect(targetX, targetY, 70,70);  
}

function setup(){
  targetX = random(70, 600-70);
  targetY = random(70, 600-70);
  robot = new Robot(300, 300, 0, 60);

  // Goal: Drive the robot into the green square
  //       (It spawns in a random position!)

  /*
  To make the robot repeat a set of steps we can use a
  while loop. Everything between the braces { } will be
  repeated while the condition between the parentheses ( )
  is true. In this case the robot will repeat whatever is
  inside until it either detects a purple area or it
  runs out of battery

  Make sure you don't run the code if you have nothing inside the
  while loop

  So far we have been telling the robot exactly what to do but
  what if the robot had to make decisions?

  To do this we use a `if` statement which looks like this:
    if (// condition) {
      // what the robot should do if it is true
    } else {
      // what the robot should do if it is false
    }
  
  There are a few important parts:
  1) Inside the parentheses ( ) is what we call a condition.
     This is what the robot uses to make the decision
  2) In the first set of braces { } is what the robot will do
     if the condition is true
  3) In the second set of braces { } (after the word "else")
     is what the robot will do if the condition is false


  Make sure you don't run the code if you have nothing inside
  the while loop
  */

  while (!robot.detectColour(color("green")) && robot.hasBattery()) {
    robot.move(1,0);
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
  while (!robot.detectColour(color("green")) && robot.hasBattery()) {
    if (robot.detectColour(color("purple"))) { 
      robot.move(-140,0);
      robot.move(1,20);
    } else {
      robot.move(1,0);
    }
  }
  */ 
}
