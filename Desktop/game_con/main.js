$(document).ready(function() {

function Car(options) {

  this.name = options.name;
  this.row = options.row;
  this.unit = 1;
  this.start = 1;
  this.position = 1;

  this.goRight = function () {
    var chance = Math.floor(Math.random() * (3 - 1)) + 1;
    this.position = this.position + chance;
    $('#' + this.name).appendTo( 'r' + this.row + 'd' + this.position);
      console.log("Vrooooom!");
    }
    if (this.position >= 10) {
      return "You won the race!";
      console.log("YOU");
    } else {
        return "Keep going!";
    }
  }


var Tom = new Car({name: "Tom", row: "1"});
var Bob = new Car({name: "Bob", row: "2"});
  console.log("Almost");

function moveIt() {
  console.log("push");
  return Tom.goRight;
  return Bob.goRight;
  console.log("Heyyyy");
}
  $("button").click(moveIt());

});
