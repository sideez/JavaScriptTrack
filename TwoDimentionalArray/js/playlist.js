var playList = [
  ["Song 1a", "Artist 1a"],
  ["Song 1b", "Artist 1b"],
  ["Song 1c", "Artist 1c"],
  ["Song 1d", "Artist 1d"],
  ["Song 1e", "Artist 1e"],
  ["Song 1f", "Artist 1f"]
];

function print(message) {
  document.write(message);
}

function printSongs( songs ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < songs.length; i += 1) {
    listHTML += '<li>' + songs[i][0] + ' by ' + songs[i][1] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

printSongs(playList);





















