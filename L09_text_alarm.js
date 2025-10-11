// write your codes here

function setup(){
    createCanvas(600,400);
    textAlign(CENTER,CENTER);
}

function draw(){
    background(225);
    let h = hour();
    let m = minute();
    let s = second();

    let stringTime = (h, 2) + ":" + nf(m, 2) + ":" + nf(s, 2);
    fill(0);
    textSize(46);
    text(stringTime, width/2, height/2);


}