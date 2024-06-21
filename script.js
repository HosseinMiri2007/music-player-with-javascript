
const musicData = [
    {
        "id" : 1,
        "name" : "phonk",
        "url" : "./musics/phonk.mp3",
        "photo" : "IMG_20240618_202907_778.jpg",
        "photo_url" : "./photos/IMG_20240618_202907_778.jpg"
    },
    {
        "id" : 2,
        "name" : "Crystal Castles",
        "url" : "./musics/Crystal Castles - Kerosene (Lyrics).mp3",
        "photo": "-2147483648_-212398.jpg",
        "photo_url" : "./photos/-2147483648_-212398.jpg"
    },
    {
        "id" : 3,
        "name" : "danza kuduro",
        "url" : "./musics/danza kuduro.mp3",
        "photo": "IMG_20240614_181256_981.jpg",
        "photo_url" : "./photos/IMG_20240614_181256_981.jpg"
    },
    {
        "id" : 4,
        "name" : "Hope",
        "url" : "./musics/Hope.mp3",
        "photo": "d90be657f7df06aece18b27f7c00140e.jpg",
        "photo_url" : "./photos/d90be657f7df06aece18b27f7c00140e.jpg"
    },
    {
        "id" : 5,
        "name" : "Touch It",
        "url" : "./musics/Touch It.mp3",
        "photo": "IMG_20240618_202440_105.jpg",
        "photo_url" : "./photos/IMG_20240618_202440_105.jpg"
    }
];

const play =  document.querySelector(".play");
const range = document.querySelector(".range");
const audio = document.querySelector(".audio");
const next =  document.querySelector(".next");
const prev =  document.querySelector(".prev");
const image = document.querySelector(".music_thumb");
const music_title = document.querySelector(".music_title");

let songindex = 0;

function playpause()
{
    if (play.classList.contains("play"))
        {
            audio.src = musicData[songindex].url;
            image.src = musicData[songindex].photo_url;
            music_title.textContent = musicData[songindex].name.toUpperCase();
            audio.play();
            play.src = "icon/pause_208px.png";
            play.classList.remove("play");
            play.classList.add("pause");
            play.style.backgroundColor = " #9c0000d0";
        }
    else if (play.classList.contains("pause"))
        {
                audio.pause();
                play.src = "icon/play_512px.png";
                play.classList.remove("pause");
                play.classList.add("play");
                play.style.backgroundColor = "rgb(45,45,45,0.8)"
        }
    range.onchange = function(){
        if (audio.play()){
            setInterval(() => {
                range.value = audio.currentTime;
            }, 500);
        }
        audio.play();
        audio.currentTime = range.value;
        
    }
}

function playNextsong(){

        songindex++;
        playpause();
 
        if (songindex > musicData.length-1)
            {
                songindex = 0;
            }
            
}   
function playPrevsong(){
            
        songindex--;
        playpause();
 
        if (songindex < 0)
            {
                songindex = musicData.length-1;
            }

}