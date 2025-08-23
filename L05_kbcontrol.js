let size

function setup(){
    createCanvas(400,400)
    background(200);
    noStroke();
}

function draw(){
}

function mousePressed(){
    fill = colour(random(255), random(255), random(255));
    size = 5;
}

function mouseDragged(){
    circle(mouseX, mouseY, size);
    size += 0.3;
}