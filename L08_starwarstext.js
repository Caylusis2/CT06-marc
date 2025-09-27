// write your codes here

let X = 200;
let Y = 300;
let SpeedX = 2;
function setup(){
    createCanvas(600,400);
}

function draw(){
    background(220);
    X += SpeedX;
    if (X + 50 <= 0 || X + 50 >= width) {
        fill(random(255), random(255), random(255));
        SpeedX *= -1;
    }
    rect(X, Y, 50, 50);
}
