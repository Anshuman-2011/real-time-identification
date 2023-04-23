status = "";
img = "";

function preload()
{
    img = loadImage("TV-under-an-air-conditioner.jpg");
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }else
    {
        console.log(results);
    }
}

function draw()
{
    img(img, 0, 0, 640, 420);
}