var start = new Date().getTime();
function getColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function showShape(){
    var top = Math.random()* 400;
    var left = Math.random()* 400;
    var height = Math.random() * 200;
    height = height + 100;
    if(Math.random() > 0.5){
        document.getElementById("shape").style.borderRadius = "50%";
        
    }
    else{
        document.getElementById("shape").style.borderRadius = "0";
    }
    start = new Date().getTime();
    document.getElementById("shape").style.top = top+"px";
    document.getElementById("shape").style.left = left+"px";
    document.getElementById("shape").style.height = height+"px";
    document.getElementById("shape").style.width = height+"px";
    document.getElementById("shape").style.backgroundColor = getColor();
    document.getElementById("shape").style.display = "block";
}
showShape();
var totalTime = 0;
var count = 0;
document.getElementById("shape").onclick = function(){
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime();
    var time = (end - start)/1000;
    document.getElementById("time").innerHTML = "<b>Your time : " + time + "s</b>";
    totalTime = totalTime + time;
    count++;
    if(count==10){
        document.getElementById("time").innerHTML = "<h3><b>Your total time : " + totalTime + "s</b></h3>";
        window.stop();
    }
    else{
        window.setTimeout(showShape, Math.random() * 2000);
    }
        
    
}