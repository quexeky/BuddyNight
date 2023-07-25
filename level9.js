function drawMap() {
  createCanvas(600, 600);
  
  noFill();
  rectMode(CORNER);
  stroke(color('blue'));
  strokeWeight(5);
  rect(0,0,width, height);
  
  const ANGLE_SCALE = 0.058
  
  rectMode(CENTER);
  fill(color('green'));
  noStroke();
  rect(width/2, height/2, 70,70);

  for (let i = 0 ; i < 250 ; i = i + (500-i)/1000) {
    strokeWeight(4);
    stroke(color('purple'));
    circle(width/2+i*cos(-i*ANGLE_SCALE),height/2+i*sin(-i*ANGLE_SCALE), 8, 8);
    stroke(color('blue'));
    circle(width/2+(i+50)*cos(-i*ANGLE_SCALE),height/2+(i+50)*sin(-i*ANGLE_SCALE), 8, 8);
  }
}

function setup(){
  robot = new Robot(200, 60, 0, 60);

  // Goal: Drive the robot into the green square
  //       but avoid the blue lines!

  /*
  If you are using a while loop make sure you don't run the code
  if you have nothing inside the braces { }
  */
  
  
  // Solution
  while(!robot.detectColour(color("green")) && robot.hasBattery()) {
    if (robot.detectColour(color("purple"))) {
      robot.move(1,6);
    } else {
      robot.move(1,-6);
    }
  }
  robot.move(15,15);
  
}
