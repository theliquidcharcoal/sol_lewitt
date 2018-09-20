var basePts = {
    x1: 158,
    y1: 217,
    x2: 300,
    y2: 311,
    x3: 440,
    y3: 217,
    x4: 300,
    y4: 120,
    ln: 194
}


function setup() {
    createCanvas(600, 600);
    background('#f3f3f3');
}

function draw() {
    drawCircle();
    translate(0, -15)
    drawQuad();
    drawRightQuad();
    drawLeftQuad();

}

function drawCircle() {
    fill('#999999');
    noStroke();
    ellipse(300, 300, 500, 500);
}

function drawQuad() {
    fill('#2f5ea6');
    quad(basePts.x1, basePts.y1, basePts.x2, basePts.y2, basePts.x3, basePts.y3, basePts.x4, basePts.y4);
}

function drawLeftQuad() {
    fill('#f1d600')
    quad(basePts.x1, basePts.y1 + basePts.ln, basePts.x2, basePts.y2 + basePts.ln, basePts.x2, basePts.y2, basePts.x1, basePts.y1);
}

function drawRightQuad() {
    fill('#bb6244');
    quad(basePts.x2, basePts.y2, basePts.x2, basePts.y2 + basePts.ln, basePts.x3, basePts.y3 + basePts.ln, basePts.x3, basePts.y3);
}



function windowResized() {

}