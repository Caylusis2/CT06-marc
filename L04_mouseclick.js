// write your codes here

let shapeColor = "blue"

function setup(){
    createCanvas(400,400)
    background(200);
}

function draw(){
    fill(shapeColor);
    ellipse(200,200,80,80)
}

function mousePressed(){
    shapeColor = "red"
}
// function mouseReleased(){
//     shapeColor = "yellow"
// }
function mouseReleased(){
    shapeColor = randomfill(255)
}