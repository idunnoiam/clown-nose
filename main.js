noseX = 0;
noseY = 0;

function preload() {
    clownNose = loadImage('https://i.postimg.cc/Xqm06YY8/clown.png');
    Hat = loadImage('https://i.postimg.cc/L5rG0QxQ/hat.png');
    tie = loadImage("https://i.postimg.cc/sgyGkjGy/bluetie.jpg")
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet os Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clownNose, noseX - 10, noseY - 10, 20, 20);
    image(Hat, noseX - 50, noseY - 140, 100, 100);
    image(tie, noseX - 10, noseY + 70, 35, 75);
}

function take_snapshot() {
    save('myFilterImage.png');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}