
var rock=new Audio("https://file-examples.com/storage/fe522079b962f100d94fb66/2017/11/file_example_MP3_5MG.mp3");
document.querySelectorAll("button")[0].addEventListener("click", handlePlay);
document.querySelectorAll("button")[1].addEventListener("click", handlePause);
function handlePlay(){
rock.play();
}
function handlePause(){
rock.pause();
}