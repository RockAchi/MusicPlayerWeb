
var rock=new Audio("https://www.youtube.com/watch?v=w9JvGk__Ffw");
document.querySelectorAll("button")[0].addEventListener("click", handlePlay);
document.querySelectorAll("button")[1].addEventListener("click", handlePause);
function handlePlay(){
rock.play();
}
function handlePause(){
rock.pause();
}