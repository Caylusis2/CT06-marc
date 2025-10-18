// write your codes here
let countdown = 5;
let timerStarted
function setup(){
    createCanvas(400,400);
    textAlign(CENTER,CENTER);
    bgcolour = colour(220);
}

function draw(){
    interval = setInterval(updateCountdown, 1000);
    background(bgcolour1, bgcolour2, bgcolour);
    console.log(cu)
    Text(countdown, width/2, height/2 + 20);
}

function mousePressed(){
    if(!timerStarted){
        timerStarted = true;
        interval = setInterval(updateCountdown, 1000);
    }
}

function updateCountdown(){
    if(countdown > 0){
        countdown-=1;
    }else{
        clearInterval(interval);
    }
}

