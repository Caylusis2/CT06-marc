// write your codes here

let staticImage;

function preload(){
    staticImage = loadImage('assets/pico-a.png');
}

function setup(){
    createCanvas(200,200);
    background('lightblue');
    image(staticImage,0,0,100,100);
}