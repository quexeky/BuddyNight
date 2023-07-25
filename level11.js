function drawMap() {
  createCanvas(800, 600);
  background(220);
  
  rect(50,50,269,269);
}

function setup(){
  robot = new Robot(50, 50, 0, 60);
  /*
  GOAL: Find the right size of square to draw
  by changing the drive distance until the robot's
  square matches the white 'goal' square
  on the screen.
  
  To complete the task:
    - Copy in your square drawing function
      from level 10.
    - Reduce the size of the function by
      using the given loop instead of 
      repeating the same code four times.
    - Switch to a for loop so you can loop
      exactly four times.
    - Modify the function to take a parameter
      for distance that can be passed into it.
    - Match the size of the robot's square with
      the white square on the screen by changing
      the input to your function.
  
  */
  
  // Your code here:
    
  // given for loop
  for (var i = 0 ; i < 4 ; i++) {
    // This will run code inside the braces {} four times!
  }
  
}

