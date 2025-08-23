function setup(){
    createCanvas(400,400)
    background(200);
    noStroke();
}

function draw(){

}

function mousepressed(){
    shapeColor = colour(random(255), random(255), random(255));
    size = 5;
}

function mousedragged(){
    circle(mouseX, mouseY, size);
    size += 0.3;
}