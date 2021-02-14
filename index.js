
const music = document.querySelector('audio');
const img =  document.querySelector('img');
const play = document.getElementById('play');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const songs  = [{
    name: 'adarsh-1',
    title: 'devil-eyes',
    artist: 'the loyalist'
},{
    name: "adarsh-2",
    title: "bomb-sabotage",
    artist: "bomber"
},
{
    name: "adarsh-3",
    title: 'sun burn',
    artists: 'anil kapoor'
}]

let isPlaying = false;

// for play function
const playMusic = ()=>{
    isPlaying  = true;
    music.play();
    play.classList.replace("fa-play" ,"fa-pause");
    img.classList.add('anime');

};
// for pause function
const pauseMusic  = ()=>{
    isPlaying  = false;
    music.pause();
    play.classList.replace("fa-pause" ,"fa-play");
    img.classList.remove('anime');

};

play.addEventListener('click',()=>{
    // if(isPlaying){
    //     pauseMusic();
    // }
    // else{
    //     playMusic();
    // }
        // or
    isPlaying ? pauseMusic() : playMusic();
});



// changing the music data
const loadSong  = (songs)=>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src =  "music/" +songs.name + ".mp3";
    img.src  =  "images/" +songs.name + ".jpg";
};
// loadSong(songs[1]);
songIndex  = 0;
//changing next property
const nextSong = ()=>{
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};
//changing prev property
const prevSong = ()=>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};


// Progress music Event 
music.addEventListener('timeupdate' ,(event)=>{
    // console.log(event);
    const {currentTime , duration} = event.srcElement;
    let progress_time = (currentTime/duration)*100;
    progress.style.width  = `${progress_time}%`;
});



next.addEventListener('click',nextSong);
prev.addEventListener('click',prevSong);