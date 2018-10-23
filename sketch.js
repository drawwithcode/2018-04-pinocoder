var x = 10;
var y = 10;
var xspeed = 10;
var yspeed = 10;

function setup() {
  //canvas big as the window
  createCanvas(windowWidth, windowHeight);
  background(255);

}

function draw() {
  push();
  textFont('Arial');
  textSize(24);
  fill(0);
  var myText = 'REDUCE THE SIZE OF THE WINDOW and move the mouse';
  text(myText, 30, 100);
  pop();


  var d = dist(windowWidth / 4, windowHeight / 4, mouseX, mouseY);

  //color and figure
  fill(random(0, 255), random(0, 255), random(0, 255));
  ellipse(x, y, d);

  //bouncing horizontally
  x = x + xspeed;

  if (x > windowWidth || x < 0) {
    xspeed = -xspeed;
  }

  //bouncing veritcally
  y = y + yspeed;

  if (y > windowHeight || y < 0) {
    yspeed = -yspeed;
  }

}
