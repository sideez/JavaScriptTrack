var html = '';

function randomRGB() {
  return Math.floor(Math.random() * 256 );
}

function randomColor() {
  return 'rgb(' + randomRGB() + ',' + randomRGB() + ',' + randomRGB() + ')';
}

function print(html) {
  document.write(html);
}

for (var i = 0; i < 10; i++) {
  html += '<div style="background-color:' + randomColor() + '"></div>';
}

print(html);
