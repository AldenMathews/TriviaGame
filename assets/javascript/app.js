var questions = [
    {
        question: "Who is a man's best friend?",
        choices: ["Cat", "Alcohol", "Dog", "Women"],
        answer: "Dog"
    },
    {
        question: "What is H2O?",
        choices: ["Beer", "Water", "Iron", "Milk"],
        answer: "Water"
    },
    {
        question: "Who is Iron Man?",
        choices: ["Robert Downey Jr.", "Robert Downey Sr.", "Brad Pitt", "Chris Pratt"],
        answer: "Rober Downey Jr."
    },
    {
        question: "What do you put under the Christmas tree?",
        choices: ["A Car", "Presents", "Earth", "Trash"],
        answer: "Presents"
    },
    {
        question: "What bird represents America?",
        choices: ["Flamingo", "Crow", "Parrot", "Eagle"],
        answer: "Eagle"
    },
];

var score = {
    correct: 0,
    incorrect: 0
};

start: function() {
    $(".start").remove();
    for (var i = 0; i < questions.length; i++) {
        quiz.append("<h1>" + questions[i].question + "</h1>");
        for (var i = 0; i < choices.length; i++) {
            quiz.append("<h3>" + choices[i].choices + "</h3>");
        }
    }
};



$(document).on("click", ".start", function(){
    quiz.start();
});