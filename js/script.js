const questionsText = [
    'Czy trawa jest zielona?',
    'Jak się nazywa język, za którego pomocą określimy wygląd strony?',
    'Czy jest to quiz stworzony w DOM?',
    'Wybierz prawidłowy przykład użycia funkcji w JavaScript'
];
const correctAnswers = ['tak', 'css', 'tak', 'dobra'];
const userAnswers = [];

const input = document.querySelectorAll('.input-answer');
const questions = document.querySelectorAll('.question');
const button = document.getElementById('next');
const final = document.querySelector('#final');
var finalMessageGood = '';
var finalMessageWrong = '';

let q = 0;

// Answers check
function checkAnswers() {
    for (let i = 0; i < questionsText.length; i += 1) {
        if (correctAnswers[i] === userAnswers[i]) {
            finalMessageGood += '<p>' + questionsText[i] + '</p>';
        }   else {
            finalMessageWrong += '<p>' + questionsText[i] + '</p>';
        }
    }
}

button.addEventListener('click', () => {
    if (q == 3) { // Last Question
        userAnswers.push( input[q].value );
        button.style.display = 'none';
        questions[q].style.display = 'none';
        final.style.display = 'block';
        checkAnswers();
    } else { // First Question
        userAnswers.push( input[q].value );
        questions[q].style.display = 'none';
        q += 1;
        questions[q].style.display = 'block';
        }
});


