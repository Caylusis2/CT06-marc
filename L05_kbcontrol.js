// let size = 5;

// function setup(){
//     createCanvas(600,600)
//     background(220);
//     // noStroke();
// }

// function draw(){
//     // circle(width/2, height/2, 100);
//     for(let i=0; i<5; i++) {
//         fill(0, i*50, 0);
//         circle(50 + i*50, 50 + i*50, 50);
//     }
// }

// function mousePressed(){
//     fill(random(255), random(255), random(255));
//     size = 5;
// }

// function mouseDragged(){
//     circle(mouseX, mouseY, size);
//     size += 0.3;
// }

function setup(){
    createCanvas(600,600)
}

function draw(){
    background(220);
    rect(width/2 - rectSize/2, height/2 - rectSize/2, rectSize, rectSize);
}

function keyPressed(){
    rectSize = 100;
}

function keyReleased(){
    rectSize = 50;
}