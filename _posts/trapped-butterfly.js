let tri = {
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0,
  x3: 0,
  y3: 0
}

let col = {
  r: 0,
  g: 0,
  b: 0
}

let size = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(55);
  seedTri();
}

function draw() {
  size = map(mouseY + random(10, 30), 0, height, 10, 90);
  col.r = map(mouseX + random(-70, 70), 0, width, 0, 255);
  col.g = map(mouseY + random(-70, 70), 0, height, 0, 100);
  col.b = random(0, 180);

  nextTri();
  noStroke();
  fill(col.r, col.g, col.b, 70);
  triangle(tri.x1, tri.y1, tri.x2, tri.y2, tri.x3, tri.y3);
}

function mouseClicked() {
  background(random(0, 255));
  seedTri();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function seedTri() {
  tri.x1 = random(0, width);
  tri.y1 = random(0, height);
  tri.x2 = nextX(tri.x1);
  tri.y2 = nextY(tri.y1);
  tri.x3 = nextX(tri.x1);
  tri.y3 = nextY(tri.y1);
}

function nextTri() {
  let corner = Math.floor(random(1,3));

  if(corner === 1) {
    do {

    } while (tri.x2 > width || tri.x2 < 0);
    tri.x2 = nextX(tri.x1);
    tri.y2 = nextY(tri.y1);
    tri.x3 = nextX(tri.x1);
    tri.y3 = nextY(tri.y1);
  } else if (corner === 2) {
    tri.x1 = nextX(tri.x2);
    tri.y1 = nextY(tri.y2);
    tri.x3 = nextX(tri.x2);
    tri.y3 = nextY(tri.y2);
  } else {
    tri.x2 = nextX(tri.x3);
    tri.y2 = nextY(tri.y3);
    tri.x1 = nextX(tri.x3);
    tri.y1 = nextY(tri.y3);
  }
}

function nextX(x) {
  let newX = x + random(-size, size);
  if (newX > width || newX < 0) {
    return nextX(x);
  } else {
    return newX;
  }
}

function nextY(y) {
  let newY = y + random(-size, size);
  if (newY > height || newY < 0) {
    return nextY(y);
  } else {
    return newY;
  }
}
