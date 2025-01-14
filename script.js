var audio=document.createElement('audio');

audio.setAttribute('src','sound.mp3');
audio.loop=true;
audio.play();
var sound_play=true;
var Start=document.querySelector("button");
// var stop=document.querySelector("#button2");
Start.addEventListener("click",sund_control);
function sund_control(){
    if(sound_play==true){
        sound_play=false;
        audio.pause();
    }
    else if(sound_play==false){
        sound_play=true;
        audio.play();
    }
}



