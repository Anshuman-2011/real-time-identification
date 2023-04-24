status = "";
img = "";
object = [];

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
        object = results;
    }
}

function draw()
{
    img(img, 0, 0, 640, 420);

    if(status != "")
    {
        for(i = 0; i < object.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : " + object.length;

            fill(r,g,b);
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x, object[i].y);
            noFill();
            stroke(r,g,b);
            rect(object[i].x-15, object[i].y-15, object[i].width+20, object[i].height+20);
        }
    }
}