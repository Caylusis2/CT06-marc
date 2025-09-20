// write your codes here

let staticImage,soundEffect,backgroundSound;
function preload(){
    staticImage = loadImage('assets/pico-a.png');
    soundeffect = loadSound('assets/pop.mp3');
}

function setup(){
    createCanvas(200,200);
    background('lightblue');
    image(staticImage,0,0,100,100);
}

function keyPressed(){
    if(keyCode === 32){
        soundEffect.play();
    }
}

// test question #2 (mid sem)(oeq)

// let d = 50;
// let x = 50;
// let y = 50;
// let colour = 0;
// function setup(){
//     createCanvas(600,600);
//     background(200);
// }
// function setup(){
//     for(let i=0; i<10;i++){
//         fill(colour)
//         circle(x,y,d);
//         x = 50 + 50*i;
//         y = 50 + 50*i;
//         colour = 25*i;
//     }
// }


