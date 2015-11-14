/* ------------
    My Solution
  ------------- */

/* 
var message = '';
var student;
var name;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getRecord() {
  message = '<h2>Student: ' + student.name + '</h2>';
  message += '<p>Track: ' + student.track + '</p>';
  message += '<p>Points: ' + student.points + '</p>';
  message += '<p>Achievements: ' + student.achievements + '</p>';
  
  return message;
}

do {
  name = prompt("Type a name to search student record or 'quit' to end:");
  name = name.toLowerCase();
  for (var i = 0; i < students.length; i++) {
    student = students[i];
    if (name === student.name.toLowerCase()) {
      print(getRecord());
      break;
    }
    continue;
  }
} while (name !== "quit")
  
*/

/* --------------- 
    Dave's solution 
    -------------- */

var message = '';
var student;
var search;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getStudentReport(student) {
  var report = '<h2>Student: ' + student.name + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Points: ' + student.points + '</p>';
  report += '<p>Achievements: ' + student.achievements + '</p>';
  
  return report;
}

while (true) {
  search = prompt('Search records: type a name [Jody] (or type "quit") to end)');
  if (search === null || search.toLowerCase() == 'quit') {
    break;
  }
  for (var i = 0; i < students.length; i += 1) {
  student = students[i];
    if (student.name === search) {
      message = getStudentReport(student);
      print(message);
    }
  }
}
