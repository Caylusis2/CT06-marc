// write your codes here

// let shapeColor = "blue";
// let x1,y1,x2 y2,x3,y3

// function setup(){
//     createCanvas(400,400)
//     background(200);
// }

// function draw(){
//     fill(shapeColor);
//     // ellipse(200,200,80,80)
//     if(mousePressed){
//     triangle(x1,y1,x2, y2,x3,y3);
//     }
// }

// // function mousePressed(){
// //     shapeColor = "red"
// // }
// // function mouseReleased(){
// //     shapeColor = "yellow"
// // }
// function mousePressed(){
//     shapeColor = color(random(255), random(255), random(255))
//     x1 = random(width);
//     y1 = random(height);
//     x2 = random(width);

//     y2 = random(height);
//     x3 = random(width);
//     y3 = random(height);
// }
// function mouseReleased(){
//     shapeColor = color(random(255), random(255), random(255))
// }


// write your codes here

// let shapeColor ="blue";


function setup(){
    createCanvas(400,400)
    background(200);
}

function draw(){
    fill(shapeColor);
    ellipse(200,200,80,80) 
}

function mousePressed(){
    shapeColor = color(random(255), random(255),random(255))
}

function mouseReleased(){
    shapeColor = color(random(255), random(255),random(255))
}

function mouseMoved(){
    circleSize += 2
}