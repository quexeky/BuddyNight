
function drawMap() {
  createCanvas(840, 1063);
  imageMode(CORNER);
  background(map_lvl4);

  rectMode(CENTER);
  fill(color('orange'));
  noStroke();
  rect(400, 530, 75,75);
 
  rectMode(CENTER);
  fill(color('green'));
  noStroke();
  rect(720, 980, 70,75); 
}

function setup(){
  robot = new Robot(50, 98, 0, 50);

  // Goal: Drive the robot into the green square
  //       but avoid the blue lines!
  // Bonus Goal: Drive to the orange square then
  //             the green square

  /*
  Hint: robot.move(-50,0); will tell the robot
        to drive backwards
  */
  
  /**
  // Solution
  robot.move(325,0);
  robot.move(20,8);
  robot.move(30,0);
  robot.move(22,7);
  robot.move(195,0);
  robot.move(23,-7);
  robot.move(190,0);
  robot.move(22,-7);
  robot.move(80,0);
  robot.move(23,7);
  robot.move(120,0);
  robot.move(23,-7);
  robot.move(30,0);
  robot.move(22,-7);
  robot.move(130,0);
  robot.move(22,7);
  robot.move(20,0);
  robot.move(23,7);
  robot.move(160,0);
  */
}
