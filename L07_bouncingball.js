// write your codes here

let staticImage

function setup(){
    createCanvas(200,200);
    background('lightblue');
}

function draw(){
    background('lightblue');
    image(staticImage)
}

function keyPressed(){
    if(keyCode === 32){
        soundEffect.play();
    }
}