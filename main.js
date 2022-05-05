nosex = 0;
nosey = 0;

function preload() {
  clown_nose = loadImage('https://i.postimg.cc/637KQxL8/2-2-moustache-png-file-thumb.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelloaded);
  poseNet.on('pose', gotpose);
}

function modelloaded() {
  console.log("poseNet is inislised")
}

function gotpose(results) {
  if (results.length > 0) {
    console.log(results);
    nosex = results[0].pose.nose.x;
    nosey = results[0].pose.nose.y;
    console.log("nosex=" + nosex);
    console.log("nosey=" + nosey);
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(clown_nose, nosex, nosey, 25, 25);

}

function take_snapshot() {
  save('snapshot.png')
}