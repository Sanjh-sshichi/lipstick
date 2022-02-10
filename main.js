noseX=0;
noseY=0;
function preload(){
        clown_nose=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png")
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(300,300);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses)
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose,noseX,noseY,50,20)
}
function modelLoaded(){
    console.log("poseNet is intialized")
}
function gotPoses(results){
    console.log(results);
    noseX=results[0].pose.nose.x-25;
    noseY=results[0].pose.nose.y+15;
}
function take_snapshot(){
    save("mypic.png")
}