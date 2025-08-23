function setup(){
    createCanvas(400,400)
    background(200);
    noStroke();
}

function draw(){
    background(200);
    fill(shapeColor);
    ellipse(200,200,50,50);
}

function mousepressed(){
    fill = colour(random(255), random(255), random(255));
    size = 5;
}

function mousedragged(){
    circle(mouseX, mouseY, size);
    size += 0.3;

}