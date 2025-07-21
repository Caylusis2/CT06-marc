/*
// Task 1: Add the setup() function
*/
function setup() {
  createCanvas(600, 400);
  background(220);
}

function draw() {
  // Challenge 1: An eye using ellipse() function
    ellipse(100,100,80,50);
    fill(225,0,0);
    ellipse(200,100,80,50);
}
  // Challenge 2: A face using circle() function
    fill(255, 255, 0);
    circle(300,200,150);
    circle(350,200,100);    
  // Challenge 3: A house using rect() function
    rect(50,50,100,75);
    rect(150,40,55,50,20);
    rect(30,20,55,50,20,15,10,5);
  // Challenge 4: A rocketship using triangle() function
    triangle(30,75,58,20,86,75);
    triangle(20,40,75,40,57,32);
  // Challenge 5: A square face using quad() function
    quad(20,20,80,20,80,80,20,80);
    quad(120,30,180,30,180,70,120,70);
    quad(50,162,86,150,50,138,14,150);
    quad(120,150,180,130,180,170,120,170);
  // Challenge 6: Add some colours to the drawings in the above challenges

  // Challenge 7: Create a funny Pokemon
