// write your codes here

let staticImage,soundEffect;
let x = 50;
let y = 50;
let w = 100;
let 

function setup(){
    createCanvas(200,200);
    background('lightblue');
}

function draw(){
    background('lightblue');
    image(staticImage,x,y)
}

function keyPressed(){
    if(keyCode === 32){
        soundEffect.play();
    }
}