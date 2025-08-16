// write your codes here

let shapeColor = "blue"

function setup(){
    createCanvas(400,400)
    background(200);
}

function draw(){
    fill(shapeColor);
    // ellipse(200,200,80,80)
    triangle(200,250,280)
}

// function mousePressed(){
//     shapeColor = "red"
// }
// function mouseReleased(){
//     shapeColor = "yellow"
// }
function mousePressed(){
    shapeColor = color(random(255), random(255), random(255))
}
function mouseReleased(){
    shapeColor = color(random(255), random(255), random(255))
}