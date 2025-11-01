// write your codes here

// let favoriteFoods = ["pizza", "Burger", "sushi", "Tacos", "Pasta"]
// let yPos = 200;
// function setup(){
//     createCanvas(400,400);
//     background(220);
//     textSize(34);
//     textAlign(CENTER,CENTER);

// }
// function draw(){
//     background(220);
//     fill(0);
//     for(let i = 0; i < favoriteFoods.length; i++){
//         text((i + 1) + "." + favoriteFoods[i],300, (80 + i*30) + yPos);
//     }
//     yPos -=0.6;
// }

// ];
// let yPos;
// function setup(){
//     createCanvas(600,400);
//     yPos = height;
// }

// function draw(){
//     background(0);
//     fill(255,255,0);
//     textSize(24);
//     textAlign(CENTER,CENTER);
//     if (audioStarted){
//         push();
//         translate(width/2, yPos);
//         scale(1,3);
//         for(let i = 0; i<storyText.length; i++){
//             text(storyText[i], 0, i* 20);
//         }
//         pop();

//         yPos -=0.6;
//         console.log(yPos);
//         if(yPos < - storyText.length *60){
//             yPos = height;
//         }
//     }
//     else{
//         text("Click to start the show", width/2, height/2);
//     }
// }
// function mousePressed(){
//     if(!audioStarted){
//         userStartAudio();
//         bg.Music.loop();
//         loop();
//         audioStarted = true;
//     }
//     else{
//         audioStarted = false;
//         bgMusic.stop();
//         noLoop();
//     }
// }