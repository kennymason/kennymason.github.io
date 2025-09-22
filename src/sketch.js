let c1, c2;

function setup() {
  createCanvas(2560, 1440);
  
  let topLeftColor = color(0, 10, 20);
  let bottomRightColor = color(0, 23, 20);

  drawDiagonalGradient(topLeftColor, bottomRightColor);
  
  noFill();
  strokeWeight(1.2);

  c1 = color(100, 225, 255, 150);
  c2 = color(100, 255, 225, 150);

  let lineSpacing = 20;
  let numLines = (height / lineSpacing) - 10;

  for (let i = 0; i < numLines; i++) {
    let baseY = i * lineSpacing;
    stroke(lerpColor(c1, c2, i / numLines));
    drawSilkLine(baseY, i);
  }
}


function drawDiagonalGradient(c1, c2) {
  for (let i = 0; i <= width + height; i++) {
    // t goes from 0 → 1 along the diagonal
    let t = i / (width + height);
    stroke(lerpColor(c1, c2, t));
    line(i, 0, 0, i); // draw a line along the diagonal
  }
}


function drawSilkLine(baseY, index) {
  beginShape();
  for (let x = 0; x <= width; x += 3) {
    // Long smooth sine-based fold
    let fold = sin((x * 0.01) + index * 0.1) * 40;

    // Small secondary ripple, offset for variation
    let ripple = sin((x * 0.005) + index * 0.2) * 80;

    // Final y position (smooth, fabric-like)
    let y = baseY + fold + ripple;

    curveVertex(x, y);
  }
  endShape();
}
