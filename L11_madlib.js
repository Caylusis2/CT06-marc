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

    NounField = createInput("Noun");
    NounField.position(55, 20);

    VerbField = createInput("Verb");
    VerbField.position(55, 40);

    AdjField = createInput("Adjective");
    AdjField.position(55, 60);

    AdverbField = createInput("Adverb");
    AdverbField.position(55, 20);

    placeField = createInput("place");
    placeField.position(55, 20);

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

