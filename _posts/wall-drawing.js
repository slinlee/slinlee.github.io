let seg = {
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0
}

let col = {
  r: 0,
  g: 0,
  b: 0
}

let size = 120;

let lines = 500;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  size = width/10;
  lines = width/2;
  seedSeg();
}

function draw() {
  // size = map(mouseY + random(10, 30), 0, height, 70, 90);
  col.r = map(mouseX + random(-70, 70), 0, width, 0, 255);
  col.g = map(mouseX + random(-70, 70), 0, width, 200, 0);
  col.b = random(0, 180);

  // background(map(mouseX, 0, width, 0, 255));
  nextSeg();

  strokeWeight(2);
  // stroke(col.r, col.g, col.b, 70);
  stroke(0, 0, 0);

  if (lines > 0) {
    line(seg.x1, seg.y1, seg.x2, seg.y2);
  }
  lines = lines - 1;
}

function mouseClicked() {
  resetWorkspace();
}

function resetWorkspace() {
  background(255);
  lines = width/2;
  size = width/10;
  seedSeg();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function seedSeg() {
  seg.x1 = random(0, width);
  seg.y1 = random(0, height);
  seg.x2 = nextX(seg.x1);
  seg.y2 = nextY(seg.y1);
}

function nextSeg() {
  seg.x1 = random(0, width);
  seg.y1 = random(0, height);

  seg.x2 = nextX(seg.x1);
  // seg.y2 = seg.y1 - Math.sqrt((size * size) - Math.pow(seg.x1 - seg.x2, 2));
  seg.y2 = nextY(seg.y1);
}

function nextX(x) {
  let newX = x + random(-size, size);

  if (newX >= width || newX <= 0) {
    return nextX(x);
  } else {
    return newX;
  }
}

function nextY(y) {
  // let newY = y + random(-size, size);
  let newY = seg.y1 - Math.sqrt((size * size) - Math.pow(seg.x1 - seg.x2, 2));
  if (newY >= height || newY <= 0) {
    return seg.y1 + Math.sqrt((size * size) - Math.pow(seg.x1 - seg.x2, 2));
  } else {
    return newY;
  }
}
