var questionArray = [
    {
        question: "1. HTML stands for ?",
        answer: "Hypertext markup language",
        options: ["Hypertext markup language", "Hypothesis Makeup language", "Happytext Markup Language"],
    },

    {
        question: "2. CSS stands for ?",
        answer: "Cascading Style Sheet",
        options: ["Card Style Sheet", "Cascading Style Sheet", "Colour Style Sheet"],
    },

    {
        question: "3. Who is the Founder of Pakistan?",
        answer: "Muhammad Ali Jinnah",
        options: ['Allama Iqbal', 'Liaquat Ali Khan', 'Muhammad Ali Jinnah'],
    },

    {
        question: "4. Which tag is link javascript file in HTML?",
        answer: " Script",
        options: ['Script', 'Link', 'a'],
    },

    {
        question: "5. Who is making the Web standards?",
        answer: "The World Wide Web Consortium",
        options: ['Google', 'The World Wide Web Consortium', 'Mozilla'],
    },

    {
        question: "6. How to HTML Id attribute in CSS",
        answer: "#",
        options: ['#', '@', '.'],
    },

    {
        question: "7. www is Abreviation for",
        answer: ' World Wide Web',
        options: [' Word Wide Web', ' World Wide Web', 'None Above This'],
    },

    {
        question: "8. Choose the correct HTML element for the largest heading:",
        answer: "h1",
        options: ['h3', 'h1', 'p'],
    },

    {
        question: "9. full name of pakistan?",
        answer: "Islamic Republic of Pakistan",
        options: ['pakistan', 'Islamic Republic of Pakistan', 'None Above This'],
    },

    {
        question: "10. How can you make a bulleted list?",
        answer: "ul",
        options: ['list', 'ol', 'ul'],
    }

]
var currentQuestion = 0;
var score = 0;
function showQuestion() {
    // show q
    var questionElement = document.getElementById('questionElement');
    questionElement.innerHTML = questionArray[currentQuestion].question;

    // show options
    var optionElement = document.getElementsByClassName('optionElement');
    for (var i = 0; i < optionElement.length; i++) {
        optionElement[i].innerHTML = questionArray[currentQuestion].options[i];
    }
}
function displayResult() {
    alert("You score is : " + score)
}
function nxtQuestion() {
    if (currentQuestion > questionArray.length - 1) {
        displayResult()
    } else {
        validate(currentQuestion);
        currentQuestion++;
        if (currentQuestion < questionArray.length)
            showQuestion(currentQuestion)
    }
    removeActive();
}

function putActive(e) {
    removeActive()
    e.classList.add("active")
}

function removeActive() {
    var active = document.getElementsByClassName('active');
    for (var i = 0; i < active.length; i++) {
        active[i].classList.remove('active')
    }
}
function validate(e) {
    console.log("validate called");
    var active = document.getElementsByClassName('active');
    if (active[0].innerHTML == questionArray[e].answer) {
        score += 1;
    }
}
