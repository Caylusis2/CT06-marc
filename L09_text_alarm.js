// write your codes here

function setup(){
    createCanvas(600,400);
    textAlign(CENTER,CENTER);
}
let countdown = 5;
let interval;
let 
function draw(){
    background(225);
    let h = hour();
    let m = minute();
    let s = second();

    let stringTime = (h, 2) + ":" + nf(m, 2) + ":" + nf(s, 2);
    fill(0);
    textSize(46);

    if( countdown == 0 ){
        bgcolor = color(random(255), random(255), random(255));
    }

    text(stringTime, width/2, height/2 - 50);

    text(countdown, wdith/2, height/2 + 20)


}

function mousePressed(){
    interval = setInterval(updateCountdown, 1000);
}

function updateCountdown(){
    if(countdown > 0){
        countdown-=1;
    }else {
        clearInterval(interval)
    }
}