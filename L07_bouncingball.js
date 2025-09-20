// write your codes here

// let staticImage,soundEffect;
// let x = 50;
// let y = 50;
// let w = 100;
// let h = 100;

// function preload(){
//     staticImage = loadImage('assets/pico-a.png');
// }

// function setup(){
//     createCanvas(200,200);
//     background('lightblue');
// }

// function draw(){
//     background('lightblue');
//     image(staticImage,x,y,w,h);
//     if (keycode === 37){
//         x-=5;
//     }
//     if (keycode === 38){
//     y-=5;
//     }
//     if (keycode === 39){
//     x+=5;
//     }
//     if (keycode === 40){
//     y+=5;
//     }
// }

// function keyPressed(){
//     if(keyCode === 32){
//        w = 50;
//     }
// }

// function keyReleased(){
//     w = 100;

// }


let ballX = 30;
let ballY = 20;
let ballSize = 30;
let ballSpeedX = 1;
let ballSpeedY = 1;

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(220);

    ballX +=ballSpeedX;
    ballY +=ballSpeedY;

    noStroke();
    fill(349);
    circle(ballX,ballY,ballSize);
}