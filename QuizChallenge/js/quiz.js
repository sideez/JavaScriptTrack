var questionsAnswers = [
  ["How many states are in the US?", 50],
  ["How many legs does an insect have?", 6],
  ["How many continents are there?", 7]
];
var correctAnswers = [];
var wrongAnswers = [];


function print(message) {
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = message;
}

function html() {
  var html = "<p>You got " + correctAnswers.length + " question(s) right.</p>";
  html = html + "<p><strong>You got these questions correct:</strong></p>";
  html = html + "<ol>";
  for (var i = 0; i < correctAnswers.length; i++) {
    html = html + "<li>" + correctAnswers[i] + "</li>";
  }
  html = html + "</ol>";
  html = html + "<p><strong>You got these questions wrong:</strong></p>";
  html = html + "<ol>";
  for (var i = 0; i < wrongAnswers.length; i++) {
    html = html + "<li>" + wrongAnswers[i] + "</li>";
  }
  html = html + "</ol>";
  
  return html;
}

for (var i = 0; i < questionsAnswers.length; i++) {
  var answer = parseInt(prompt(questionsAnswers[i][0]));
  if (answer == questionsAnswers[i][1]) {
    correctAnswers.push(questionsAnswers[i][0]);
  } else {
    wrongAnswers.push(questionsAnswers[i][0]);
  }
}

var message = html();
print(message);