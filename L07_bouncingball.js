// write your codes here

function setup(){
    createCanvas(200,200);
    background('lightblue');
}

let staticImage,soundEffect;
function preload(){
    staticImage = loadImage('assets/pico-a.png');
    soundeffect = loadSound('assets/pop.mp3');
}

function keyPressed(){
    if(keyCode === 32){
        soundEffect.play();
    }
}