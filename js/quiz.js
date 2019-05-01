var questions = [
  ['It sugar is sweet? (yes or no)', 'yes'],
  ['Complete the name of popular drink: Coca-', 'cola'],
  ['1m = ?cm', '100']

];
var correct = [];
var answer;
var i = 0;
var htmlRight;
var htmlWrong;

function print(message) {
  document.write(message);
}


while ( i < questions.length ) {
  answer = prompt(questions[i][0]);
  if (answer.toLowerCase() == questions[i][1]) {
    correct.push('right');
  } else {
    correct.push('wrong');
  }
  i += 1;
}

i = 0;

print('<h2>You got these questions correct:</h2>');
htmlRight = '<ol>';

while ( i < correct.length ) {
  if (correct[i] === 'right') {
    htmlRight += ('<li>' + questions[i][0] + '</li>')
  } 
  i += 1;
}

    htmlRight += '</ol>'
    print(htmlRight);

print('<h2>You got these questions wrong:</h2>');
htmlWrong = '<ol>';
i = 0;

while ( i < correct.length ) {
  if ( correct[i] === 'wrong') {
    htmlWrong += ('<li>' + questions[i][0] + '</li>')
  } 
  i += 1;
}

    htmlWrong += '</ol>'
    print(htmlWrong);
