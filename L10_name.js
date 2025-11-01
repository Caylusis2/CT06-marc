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

// let inputText;
// let userText = "Your Text Here";

// function setup(){
//     createCanvas(600,400);


//     inputText = createInput();
//     inputText.position(200, height -80);
//     inputText.input(updateText);
// }

// function draw(){
//     background(220);

//     fill(0);
//     textSize(28);
//     textAlign(CENTER,CENTER);
//     text(userText, width/2, 180);
// }

// function updateText(){
//     userText = this.value();
// }

// let favoriteFoods = ["Pizza", "Burger", "Sushi"];
// let pos;

// function setup(){
//     createCanvas(400, 200);
//     pos = 50;
//     textSize(24);
// }

// function draw(){
//     background(220);
//     for (let i = 0; i < favoriteFoods.length; i++){
//         text(favoriteFoods[i], pos + i * 100, height/2);
//     }
// }

let nameInput;
