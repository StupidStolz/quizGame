const quizData = [
    {
        question: 'choose right number',
        a: '12',
        b: '28',
        c: '97',
        d: '42',
        correct: 'd'
    }, {
        question: 'how much do you need sleep to feel good',
        a: '1-2hr',
        b: '20-40min',
        c: '6-7hr',
        d: '13-15',
        correct: 'c'
    }, {
        question: 'who president of USA right now',
        a: 'Donald Trump',
        b: 'Joe Biden',
        c: 'George Bush',
        d: 'Gachi Muchi',
        correct: 'd'
    }, {
        question: 'how much time i need to join akvelon?)',
        a: 'few days',
        b: '2-3 month',
        c: '10 year',
        d: 'alredy invite from all from FANG...',
        correct: 'b'
    }, {
        question: 'Never',
        a: 'say never',
        b: 'gonna give you up',
        c: 'alone',
        d: 'land',
        correct: 'b'
    }
];


const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll (".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text'); 
const b_text = document.getElementById('b_text'); 
const c_text = document.getElementById('c_text'); 
const d_text = document.getElementById('d_text'); 
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
} 

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    //check to see the answer
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }else {
            quiz.innerHTML = `<h2>you answered correctly ${score}/${quizData.length} questions.</h2><button onclick="location.reload()">Reload</button>`
        }
    }

});