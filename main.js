function preload() {
}

function setup() {
    canvas = createCanvas(640,480);
    canvas.position(450,250);
    video = createCapture(VIDEO);
    video.hide();

}

function draw() {
    image(video,200,200,300,300);
}

function take_snapshot(){
    save("picture.png");
}