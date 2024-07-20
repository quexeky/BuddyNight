// Level 1
robot.move(150, 0);

// Level 2
robot.move(102, 0);
robot.move(60, 2.5);
robot.move(108, 0);

// Level 3
robot.move(10, 15);
robot.move(140, 0);
robot.move(10, -15);
robot.move(50, 0);
robot.move(80, -2);
robot.move(85, 0);

// Level 4
robot.move(325, 0);
robot.move(20, 8);
robot.move(30, 0);
robot.move(22, 7);
robot.move(195, 0);
robot.move(23, -7);
robot.move(190, 0);
robot.move(22, -7);
robot.move(80, 0);
robot.move(23, 7);
robot.move(120, 0);
robot.move(23, -7);
robot.move(30, 0);
robot.move(22, -7);
robot.move(130, 0);
robot.move(22, 7);
robot.move(20, 0);
robot.move(23, 7);
robot.move(160, 0);

// Level 5 (Currently draws a square)
while (robot.hasBattery()) {
  robot.move(5, 31.5);
  robot.move(80, 0);
}

// level 6
while (!robot.detectColour(color("purple")) && robot.hasBattery()) {
  robot.move(1, 0);
}
robot.move(20, -8);
robot.move(70, 0);
robot.move(22, -7);

while (!robot.detectColour(color("purple")) && robot.hasBattery()) {
  robot.move(1, 0);
}
robot.move(20, 8);
robot.move(70, 0);
robot.move(22, 7);

while (!robot.detectColour(color("green")) && robot.hasBattery()) {
  robot.move(1, 0);
}

// Level 7
// Solution 1 (efficiency of a robotic vacuum)
while (!robot.detectColour(color("green")) && robot.hasBattery()) {
  if (robot.detectColour(color("purple"))) {
    robot.move(-20, 0);
    robot.move(10, 20);
  } else {
    robot.move(1, 0);
  }
}
// Solution 2 (radial scan)
while (!robot.detectColour(color("green")) && robot.hasBattery()) {
  if (robot.detectColour(color("purple"))) {
    robot.move(-140, 0);
    robot.move(1, 20);
  } else {
    robot.move(1, 0);
  }
}

// Level 8
// Solution 1 (efficiency of a robotic vacuum)
while (!robot.detectColour(color("green")) && robot.hasBattery()) {
  if (robot.detectColour(color("purple"))) {
    robot.move(-20, 0);
    robot.move(10, 20);
  } else {
    robot.move(1, 0);
  }
}
// Solution 2 (radial scan)
let count = 0; // Keep track of how far we drove
while (!robot.detectColour(color("green")) && robot.hasBattery()) {
  if (robot.detectColour(color("purple"))) {
    robot.move(-count, 0);
    robot.move(1, 10);
    count = 0;
  } else {
    robot.move(1, 0);
    count = count + 1;
  }
}
// Solution 3 (zig-zag)
let left = false; // keep track of which way we should turn
while (!robot.detectColour(color("green")) && robot.hasBattery()) {
  if (robot.detectColour(color("purple"))) {
    if (left) {
      robot.move(31, -10);
      left = false;
    } else {
      robot.move(31, 10);
      left = true;
    }
  } else {
    robot.move(1, 0);
  }
}

// Level 9
while (!robot.detectColour(color("green")) && robot.hasBattery()) {
  if (robot.detectColour(color("purple"))) {
    robot.move(1, 6);
  } else {
    robot.move(1, -6);
  }
}
robot.move(15, 15);

// Level 10

s1(robot);
robot.move(50, 0);
s1(robot);

function s1(robot) {
  s2(robot);
  s2(robot);
  s2(robot);
  s2(robot);
}

function s2(robot) {
  robot.move(25, 0);
  robot.move(16, 10);
}

// Level 11 (?)

// Level 12 (?)

// Level 13 (?)
