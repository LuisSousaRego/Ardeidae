const colors = {
    "aureolin": "#F7E733",
    "green": "#29524A",
    "whiteSmoke": "#F5F5F5",
    "teaRose": "#E9BCB7",
    "turquoise": "#41E2BA",
}

let arcSize = 100;
let yStep = 10;
let padding = arcSize * 4;
let phi = 0;
let phiIncrement = 3;

let rotation = 0

function setup() {
    const canvaContainer = select("#landing-canva");
    const canva = createCanvas(canvaContainer.width, canvaContainer.height);
    canva.parent("landing-canva");
    frameRate(15);

    // random vars
    rotation = random(PI / 2);
    arcSize = random(50, 150);
    yStep = random(8, 12);
    phiIncrement = random(1, 5);
}

function draw() {
    background(colors.green);
    noFill();
    stroke(colors.teaRose);

    rotate(rotation);
    translate(0, -(Math.sin(rotation) * width));

    for (let y = -padding; y < (height) + padding; y += yStep) {

        let sw1 = map(sin(radians(y + phi)), -1, 1, 2, yStep);
        strokeWeight(sw1)
        for (let x1 = - padding; x1 < width + padding; x1 += arcSize * 2) {
            arc(x1, y, arcSize, arcSize, 0, PI);
        }

        let sw2 = map(sin(radians(y - phi)), -1, 1, 2, yStep);
        strokeWeight(sw2)
        for (let x2 = - padding; x2 < width + padding; x2 += arcSize * 2) {
            arc(x2 + arcSize, y, arcSize, arcSize, PI, TWO_PI);

        }
    }
    phi = phi + phiIncrement;
}