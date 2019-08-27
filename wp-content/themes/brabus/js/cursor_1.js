let x = 0;
let y = 0;
let a = 0;
let b = 0;
let colA = {
  a: 0,
  b: 0,
  c: 0
};

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(240,240,240);
  
  x = lerp(x, mouseX, .08);
  y = lerp(y, mouseY, .08);
  
  ellipse(x, y, a, a);
  fill(colA.a, colA.b, colA.c);
  
  
  if (mouseIsPressed) {
    a = lerp(a, 70, .1);
    colA.a = lerp(colA.a, 200, 0.2);
  } else {
    a = lerp(a, 100, .1);
    colA = {
      a: lerp(colA.a, 150, 0.2),
      b: 101,
      c: 255
    };
  }

}
