// write your codes here

let inputField;
let submitButton;
let outputArea;

function setup(){
    createCanvas()
    background(220);

    inputField = createInput("Enter text here ");
    inputField.position(55, 20);

    submitButton = createButton("show");
    submitButton.position(inputField.X + inputField.width + 10, inputField.y);
    
}

