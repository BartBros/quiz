const answer = ['tak', 'css', 'tak', 'dobra'];

const questions = document.querySelectorAll('.question');
const button = document.getElementById('next');
const question = document.querySelector('.question');
let q = 0;

button.addEventListener('click', () => {
    questions[q].style.display = 'none';
    q += 1;
    questions[q].style.display = 'block';
});