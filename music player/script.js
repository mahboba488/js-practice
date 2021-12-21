//Initialize the variables

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');

let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName("songItem"));




let songs=[
    {songName:"warriyo - Mortals (feat.Laura Brehm)[NCS Relase]", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Cielo - huma huma", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"Deaf KEV - Invincible [NCS Realse] -320k", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"Different Heaven & Ehide - my heart  [NCS Realse] -320k", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"janji-heroes-tonight-feat-johning -ncs-relase", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:" Rabba-salam-e-Ishq", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:" sakhiyaan-salam-e-Ishq", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"bhula dena-salam-e-Ishq", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName:"tumhari kasam", filePath:"songs/9.mp3", coverPath:"covers/9.jpg"},
    {songName:"salam-e-Ishq", filePath:"songs/10.mp3", coverPath:"covers/10.jpg"},

]


songItems.forEach((element,i)=>{

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;


});

//audioElement.play();

// Handle play/pause click

masterPlay.addEventListener( 'click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =1;



    }

    else{

        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity =0;

    }
})

//listen to Events

audioElement.addEventListener('timeupdate',()=>{
    
    //update seekbar

    progress = parseInt(( audioElement.currentTime/audioElement.duration)* 100);
  
})

myProgressBar.addEventListener('change',()=>{

    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;

})

const makeAllPlays =()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}

 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener("click",(e)=>{
      makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.scr = 'songs/3.mp3';
        audioElement.play();

    })
})

