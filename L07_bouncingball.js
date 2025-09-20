// write your codes here

function setup(){
    createCanvas(200,200);
    background('lightblue');
}

function draw(){
    background('lightblue');
    Image(staticImage)
}

function keyPressed(){
    if(keyCode === 32){
        soundEffect.play();
    }
}