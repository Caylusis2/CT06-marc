// write your codes here
// let countdown = 5;
// let timerStarted = false;
// function setup(){
//     createCanvas(400,400);
//     textAlign(CENTER,CENTER);
//     bgcolor = color(220);
// }

// function draw(){
//     background(bgcolor);
//     text(countdown, width/2, height/2 +20);

// console.log(countdown);
// }

// function mousePressed(){
//     if(!timerStarted){
//         timerStarted = true;
//         interval = setInterval(updateCountdown, 1000);
//     }
// }

// function updateCountdown(){
//     if(countdown > 0){
//         countdown-=1;
//         bgcolor = color(random(225), random(225), random(225));
//         console.log(countdown);
//     }else{
//         clearInterval(interval);
//         countdown = 5;
//         timerStarted = false;
//     }
// }

let inputText;
let userText = "Your Text Here";

function setup(){
    createCanvas(600,400);
}

inputText = createInput();
inputText.position(200, height -80);
inputText