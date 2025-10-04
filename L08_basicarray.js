// write your codes here

let favoriteFoods = ["pizza", "Burger", "sushi", "Tacos", "Pasta"]
function setup(){
    createCanvas(400,400);
    background(220);
    textSize(40);
    textAlign(LEFT,CENTER);
    text

}
function draw(){
    background(220);
    fill(0);
    for(let i = 0; i < favoriteFoods.length; i++){
        text((i + 1) + "." + favoriteFoods[i],50,80 + i*30);
    }
}