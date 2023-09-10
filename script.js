const questions = [
    {
        question: "The number 1.101001000100001... is",
        answers: [
            { text: "a natural number", correct: false},
            { text: "a whole number", correct: false},
            { text: "a rational number", correct: false},
            { text: "an irrational number", correct: true},
        ]
    },
    {
        question: "If value of 104 × 96 is",
        answers: [
            { text: "9984", correct: true},
            { text: "9469", correct: false},
            { text: "10234", correct: false},
            { text: "11324", correct: false},
        ]
    },
    {
        question: "The decimal representation of the rational number is",
        answers: [
            { text: "Always terminating", correct: false},
            { text: "Either terminating or repeating", correct: true},
            { text: "Either terminating or non-repeating", correct: false},
            { text: "Neither terminating nor repeating", correct: false},
        ]
    },
    {
        question: "The rational number 0.3 veniculum can also be written as",
        answers: [
            { text: "0.3", correct: false},
            { text: "3/10", correct: false},
            { text: "0.33", correct: false},
            { text: "1/3", correct: true},
        ]
    },
    {
        question: "(16)^3/4 equals to?",
        answers: [
            { text: "2", correct: false},
            { text: "4", correct: false},
            { text: "8", correct: true},
            { text: "16", correct: false},
        ]
    },
    {
        question: "If x + 2 is a factor of x^3 – 2ax^2 + 16, then value of 'a' is",
        answers: [
            { text: "3", correct: false},
            { text: "14", correct: true},
            { text: "4", correct: false},
            { text: "2", correct: false},
        ]
    },
    {
        question: "If one of the factor of x^2 + x – 20 is (x + 5). Find the other",
        answers: [
            { text: "x – 4", correct: true},
            { text: "x + 2", correct: false},
            { text: "x + 4", correct: false},
            { text: "x – 5", correct: false},
        ]
    },
    {
        question: "Which point lies to the right of y-axis?",
        answers: [
            { text: "(0, 3)", correct: false},
            { text: "(-2,-1)", correct: false},
            { text: "(3, 5)", correct: true},
            { text: "(-3,-2)", correct: false},
        ]
    },
    {
        question: "Which point lies in IV quadrant?",
        answers: [
            { text: "(-3,-4)", correct: false},
            { text: "(2,-4)", correct: true},
            { text: "(-2, 3)", correct: false},
            { text: "(0, 1) ", correct: false},
        ]
    },
    {
        question: "If two interior angles on the same side of a transversal intersecting two parallel lines are in the ratio 2 : 3, then the greater of the two angles is:",
        answers: [
            { text: "54°", correct: false},
            { text: "108°", correct: false},
            { text: "120°", correct: false},
            { text: "136°", correct: true},
        ]
    },
    {
        question: ".If ABC and DBC are two isosceles triangles on the same base BC. Then:",
        answers: [
            { text: "∠ABD = ∠ACD", correct: true},
            { text: "∠ABD > ∠ACD", correct: false},
            { text: "∠ABD < ∠ACD", correct: false},
            { text: "None of the above", correct: false},
        ]
    },
    {
        question: "In ∆ PQR, ∠R = ∠P and QR = 4 cm and PR = 5 cm. Then the length of PQ is",
        answers: [
            { text: "2 cm", correct: false},
            { text: "2.5 cm", correct: false},
            { text: "4 cm", correct: true},
            { text: "5 cm", correct: false},
        ]
    },
    {
        question: "The sides of a triangle are in the ratio 12: 17: 25 and its perimeter is 540 cm. The area is:",
        answers: [
            { text: "1000 sq.cm", correct: false},
            { text: "5000 sq.cm", correct: false},
            { text: "9000 sq.cm", correct: true},
            { text: "8000 sq.cm", correct: false},
        ]
    },
    {
        question: "An isosceles right triangle has an area of 8 cm2. The length of its hypotenuse is",
        answers: [
            { text: "√32 cm", correct: true},
            { text: "√16 cm", correct: false},
            { text: "√48 cm", correct: false},
            { text: "√24 cm", correct: false},
        ]
    },
    {
        question: "An exterior angle of a triangle is 105° and its two interior opposite angles are equal. Each of these equal angles is",
        answers: [
            { text: "37 ½°", correct: false},
            { text: "72 ½°", correct: false},
            { text: "75°", correct: false},
            { text: "52 ½°", correct: true},
        ]
    },
    {
        question: "Which of these statements do not satisfy Euclid’s axiom?",
        answers: [
            { text: "Things which are equal to the same thing are equal to one another", correct: false},
            { text: "If equals are added to equals, the wholes are equal.", correct: false},
            { text: "If equals are subtracted from equals, the remainders are equal.", correct: false},
            { text: "The whole is lesser than the part.", correct: true},
        ]
    },
    {
        question: "The edges of a triangular board are 6 cm, 8 cm and 10 cm. The cost of painting it at the rate of 9 paise per cm^2 is",
        answers: [
            { text: "₹2", correct: false},
            { text: "₹2.16", correct: true},
            { text: "₹2.48", correct: false},
            { text: "₹3", correct: false},
        ]
    },
    {
        question: "Axioms are assumed",
        answers: [
            { text: "Theorems", correct: false},
            { text: "Definitions", correct: false},
            { text: "Universal truths specific to geometry", correct: false},
            { text: "Universal truths in all branches of mathematics", correct: true},
        ]
    },
    {
        question: "The three rational numbers between 3 and 4 are:",
        answers: [
            { text: "5/2, 6/2, 7/2", correct: false},
            { text: "13/4, 14/4, 15/4", correct: false},
            { text: "12/7, 13/7, 14/7", correct: false},
            { text: "11/4, 12/4, 13/4", correct: true},
        ]
    },
    {
        question: "The value of k, if (x – 1) is a factor of 4x3 + 3x2 – 4x + k, is",
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "-3", correct: true},
            { text: "3", correct: false},
        ]
    },
    {
        question: "The number obtained on rationalising the denominator of 1/ (√7 – 2) is",
        answers: [
            { text: "(√7+2)/3", correct: true},
            { text: "(√7-2)/3", correct: false},
            { text: "(√7+2)/5", correct: false},
            { text: "(√7+2)/45", correct: false},
        ]
    },
    {
        question: "The irrational number between 2 and 2.5 is",
        answers: [
            { text: "√11", correct: false},
            { text: "√5", correct: true},
            { text: "√22.5", correct: false},
            { text: "√12.5", correct: false},
        ]
    },
    {
        question: "Two parallel lines intersect at:",
        answers: [
            { text: "One point", correct: false},
            { text: "Two points", correct: false},
            { text: "Three points", correct: false},
            { text: "Null", correct: true},
        ]
    },
    {
        question: "One of the linear factors of 3x^2+8x+5 is",
        answers: [
            { text: "(x+1)", correct: true},
            { text: "(x-2)", correct: false},
            { text: "(x+2)", correct: false},
            { text: "(x-4)", correct: false},
        ]
    },
    {
        question: "If x2+kx+6 = (x+2)(x+3) for all k, find the value of k.",
        answers: [
            { text: "-1", correct: false},
            { text: "1", correct: false},
            { text: "3", correct: false},
            { text: "5", correct: true},
        ]
    },
    {
        question: "Two angles whose sum is equal to 180° are called:",
        answers: [
            { text: "Vertically opposite angles", correct: false},
            { text: "Complementary angles", correct: false},
            { text: "Adjacent angles", correct: false},
            { text: "Supplementary angles", correct: true},
        ]
    },
    {
        question: "There are ________ number of Euclid’s Postulates",
        answers: [
            { text: "Three", correct: false},
            { text: "Four", correct: false},
            { text: "Five", correct: true},
            { text: "Six", correct: false},
        ]
    },
    {
        question: "The angles of a triangle are in the ratio 5 : 3: 7. The triangle is",
        answers: [
            { text: "a right triangle", correct: false},
            { text: "an acute-angled triangle", correct: true},
            { text: "an obtuse-angled triangle", correct: false},
            { text: "an isosceles triangle", correct: false},
        ]
    },
    {
        question: "If the supplement of an angle is 4 times of its compliment, find the angle.",
        answers: [
            { text: "60°", correct: true},
            { text: "50°", correct: false},
            { text: "80°", correct: false},
            { text: "100°", correct: false},
        ]
    },
    {
        question: "In ∆ ABC, BC = AB and ∠B = 80°. Then ∠A is equal to",
        answers: [
            { text: "40°", correct: false},
            { text: "50°", correct: true},
            { text: "80°", correct: false},
            { text: "100°", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innnerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.
        length}!`;
        nextButton.innerHTML = "play Again";
        nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})


startQuiz();


function tp(){
    window.location = "rate.html";
}