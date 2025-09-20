// write your codes here

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