var questionsAnswers = [
  {
    question: "How many states are in the US?",
    answer: 50
  },
  {
    question: "How many legs does an insect have?",
    answer: 6
  },
  {
    question: "How many continents are there?",
    answer: 7
  }
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
  var answer = parseInt(prompt(questionsAnswers[i].question));
  if (answer == questionsAnswers[i].answer) {
    correctAnswers.push(questionsAnswers[i].question);
  } else {
    wrongAnswers.push(questionsAnswers[i].question);
  }
}

var message = html();
print(message);
