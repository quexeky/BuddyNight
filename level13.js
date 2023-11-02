let mapChoice = Math.floor(Math.random() * 3);
function drawMap() {
  createCanvas(600, 600);
  rectMode(CENTER);

  noStroke();

  fill(color("white"));
  rect(width / 2, height / 2, width, height);

  if (mapChoice === 0) {
    fill(color("red"));
    rect(100, 100, 50, 50);
    rect(200, 100, 50, 50);
    rect(400, 400, 50, 50);
    rect(400, 300, 50, 50);
    rect(400, 200, 50, 50);

    fill(color("purple"));
    rect(200, 500, 50, 50);
    rect(500, 500, 50, 50);
    rect(500, 400, 50, 50);
    rect(500, 300, 50, 50);
    rect(500, 200, 50, 50);
    rect(400, 100, 50, 50);
    rect(300, 100, 50, 50);

    fill(color("green"));
    rect(300, 400, 50, 50);
  } else if (mapChoice === 1) {
    fill(color("red"));
    rect(100, 400, 50, 50);
    rect(200, 300, 50, 50);
    rect(300, 200, 50, 50);
    rect(400, 200, 50, 50);
    rect(400, 400, 50, 50);
    rect(200, 200, 50, 50);
    rect(100, 200, 50, 50);

    fill(color("purple"));
    rect(200, 400, 50, 50);
    rect(300, 300, 50, 50);
    rect(300, 400, 50, 50);
    rect(300, 500, 50, 50);
    rect(500, 500, 50, 50);
    rect(500, 400, 50, 50);
    rect(500, 200, 50, 50);
    rect(500, 100, 50, 50);
    rect(200, 100, 50, 50);

    fill(color("green"));
    rect(100, 100, 50, 50);
  } else {
    fill(color("red"));
    rect(100, 300, 50, 50);
    rect(300, 100, 50, 50);

    fill(color("purple"));
    rect(300, 300, 50, 50);

    fill(color("green"));
    rect(500, 100, 50, 50);
  }
}

function setup() {
  robot = new Robot(100, 500, 4.7, 50);

  // Goal: Drive the robot into the green square

  /*
  You will need to detect the coloured squares as the robot 
  crosses them and use that to help solve the maze.
  There are several differnt maps, so you can't just drive
  straight to the green square!
  
  Hints:
  - You might want to use your function from the previous level.
  - You can have two loops inside of eachother.
  */

  // Your code here:
}
