const questionsText = [
    'Czy trawa jest zielona?',
    'Jak się nazywa język, za którego pomocą określimy wygląd strony?',
    'Czy jest to quiz stworzony w DOM?',
    'Wybierz prawidłowy przykład użycia funkcji w JavaScript'
];
const correctAnswers = ['tak', 'css', 'tak', 'good'];
const userAnswers = [];

const input = document.querySelectorAll('.input-answer');
const questions = document.querySelectorAll('.question');
const button = document.getElementById('next');
const final = document.querySelector('#final');
var finalMessageGood = '<h3>Na te pytania odpowiedziałeś poprawnie:</h3>';
var finalMessageWrong = '<h3>Na te pytania odpowiedziałeś źle:</h3>';

var userAnswersCorrect = [];
var userAnswersWrong = [];


let q = 0;

// Answers check
function checkAnswers() {
    for (let i = 0; i < questionsText.length; i += 1) {
        if (correctAnswers[i] === userAnswers[i]) {
            finalMessageGood += '<p>' + questionsText[i] + '</p>';
            userAnswersCorrect.push(questionsText[i]);
        }   else {
            finalMessageWrong += '<p>' + questionsText[i] + '</p>';
            userAnswersWrong.push (questionsText[i]);
        }
    }
}

button.addEventListener('click', () => {
    if (q == 3) { // Last Question
        //if (document.getElementById('answer3').checked ) {userAnswers.push('dziala kurwa');}
       // userAnswers.push( input[q].value );

       var radios = document.getElementsByName('question4');

       for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
            userAnswers.push(radios[i].value);
            break;
            } 
        }

        button.style.display = 'none';  // Hide button when last question
        questions[q].style.display = 'none';
        final.style.display = 'block';
        checkAnswers();

        if (userAnswersCorrect.length > 0 && userAnswersWrong.length > 0) {
        document.getElementById('correct_answers').innerHTML = finalMessageGood;
        document.getElementById('wrong_answers').innerHTML = finalMessageWrong;
        } else if (userAnswersCorrect.length === 0) {
            document.getElementById('wrong_answers').innerHTML = finalMessageWrong;
        } else {
            document.getElementById('correct_answers').innerHTML = finalMessageGood;
        }

    } else { // First Question
        userAnswers.push( input[q].value.toLowerCase() );
        questions[q].style.display = 'none';
        q += 1;
        questions[q].style.display = 'block';
        }
});


