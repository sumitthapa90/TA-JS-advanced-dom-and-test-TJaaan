let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");

//RECTANGLES

// context.fillStyle = "rgba(255, 0, 0, .5)";
// context.fillRect(100, 100, 150, 150);
// context.fillStyle = "rgba(0, 255, 0, .5)";
// context.fillRect(250, 250, 150, 150);
// context.fillStyle = "rgba(0, 0, 255, .5)";
// context.fillRect(400, 100, 150, 150);

// LINES

// context.beginPath();
// context.moveTo(100, 500);
// context.lineTo(500, 500);
// context.lineTo(500, 600);
// context.lineTo(100, 600);
// context.lineTo(100, 500);
// context.lineTo(500, 600);
// context.lineTo(500, 500);
// context.lineTo(100, 600);

// context.strokeStyle = "#fa34a3";
// context.stroke();

// ARC / CIRCLE

function makeRandomColor() {
  var c = "";
  while (c.length < 6) {
    c += Math.random().toString(16).substr(-5).substr(-1);
  }
  return "#" + c;
}

function Circle(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = color;

  this.draw = function () {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.strokeStyle = this.borderColor;
    context.stroke();
    context.fillStyle = this.color;
    context.fill();
  };
  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  };
}

var circleArray = [];

for (var i = 0; i < 100; i++) {
  let radius = 35;
  var x = Math.random() * (innerWidth - radius * 2) - radius;
  var y = Math.random() * (innerHeight - radius * 2) - radius;
  var dx = (Math.random() - 0.5) * 3;
  var dy = (Math.random() - 0.5) * 3;
  var color = makeRandomColor();
  var borderColor = makeRandomColor();

  circleArray.push(new Circle(x, y, dx, dy, radius, color, borderColor));
}

function animate() {
  requestAnimationFrame(animate);
  context.beginPath();
  context.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}
animate();


