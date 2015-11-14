function Dice(sides) {
  this.sides = sides
}

// The prototype function will be shared by all instances of Dice object
Dice.prototype.roll = function () {
  var randomNumber = Math.floor(Math.random() * this.sides) + 1;
  return randomNumber;
}

var dice = new Dice(6);
var dice = new Dice(10);
