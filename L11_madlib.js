// write your codes here
let NounField;
let VerbField;
let AdjField;
let AdverbField;
let placeField;
let submitButton;
let outputArea;

function setup(){
    createCanvas(600,600)
    background(220);

    NounField = createInput("Enter noun here ");
    NounField.position(55, 20);

    VerbField = createInput("Enter verb here ");
    VerbField.position(55, 40);

    AdjField = createInput("Enter adjective here ");
    AdjField.position(55, 60);

    AdverbField = createInput("Enter adverb here ");
    AdverbField.position(55, 20);

    PlaceField = createInput("Enter text here ");
    inputField.position(55, 20);

    submitButton = createButton("show");
    submitButton.position(inputField.X + inputField.width + 10, inputField.y);
    submitButton.mousePressed(displayInput);

}
function displayInput(){
    background(220);
    const inputValue = inputField.value();
    textSize(64);
    textAlign(CENTER,CENTER);
    text(inputValue, 200, 100);
}

