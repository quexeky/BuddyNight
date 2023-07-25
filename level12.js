let mapChoice = Math.floor(Math.random()*2);
function drawMap() {
  createCanvas(600, 600);
  rectMode(CENTER);
  
  noStroke();
  
  fill(color('white'));
  rect(width / 2, height / 2, width, height)
  
  if (mapChoice === 0) {
    fill(color('purple'));
    rect(300, 100, 50, 50);
    
    fill(color('green'));
    rect(70, 100, 50, 50);
  } else {
    fill(color('red'));
    rect(300, 100, 50, 50);
    
    fill(color('green'));
    rect(530, 100, 50, 50);
  }
}

function setup() {
  robot = new Robot(300, 500, 4.7, 60);
  
  // Goal: Drive the robot into the green square
  
  /*
  You will need to detect the colour that appears in front of the robot
  to make a decision. If the box is purple the robot will need to drive
  left, if the box is red it will need to go right.
  
  You may need to use while(){...} loops, the robot.detectColour()
  function and if(){...} statements.
  Once you have it working, put your decision and turning code into
  a function, this will be useful for the next level.
  */
  
  // Your code here:
  
}

