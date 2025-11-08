//write your codes here
// let NounField;
// let VerbField;
// let AdjField;
// let AdverbField;
// let placeField;
// let submitButton;
// let outputArea;
// let storyText = "";
// let storyTemplate;
// let template;

// function setup(){
//     createCanvas(600,600)
//     background(220);

//     storyTemplate = [
//         "The {adj} {noun} decided to {verb} {adj} at the {place}."
//     ];

//     template = random(storyTemplate);

   
//     NounField = createInput("Noun");
//     NounField.position(55, 20);

//     VerbField = createInput("Verb");
//     VerbField.position(55, 60);

//     AdjField = createInput("Adjective");
//     AdjField.position(55, 100);

//     AdverbField = createInput("Adverb");
//     AdverbField.position(55, 140);

//     placeField = createInput("place");
//     placeField.position(55, 180);

//     submitButton = createButton("show");
//     submitButton.position(55,220);
//     submitButton.mousePressed(displayInput);

// }
// function displayInput(){
//      storyText = template.replace("{noun}", NounField.value())
//                         .replace("{verb}", VerbField.value())
//                         .replace("{adj}", AdjField.value())
//                         .replace("{adv}", AdverbField.value())
//                         .replace("{place}", placeField.value())

//     console.log(NounField.value());
//     console.log(VerbField.value());
//     console.log(AdjField.value());
//     console.log(AdverbField.value());
//     console.log(placeField.value());
//     console.log(storyText);
// //     background(220);
// //     const inputValue = inputField.value();
// //     textSize(64);
// //     textAlign(CENTER,CENTER);
// //     text(inputValue, 200, 100);
// // }
// }