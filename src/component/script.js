import { FaPauseCircle } from 'react-icons/fa';
console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio("./song/Night.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('bar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Night Changes", filepath:"./song/Night.mp3",coverPath:"./covers/night.jpg"},
    {songName:"Lag ja gale", filepath:"./song/Sanam.mp3",coverPath:"./covers/sanam.jpg"},
    {songName:"Singara Siriye", filepath:"./song/Singara.mp3",coverPath:"./covers/kantara.webp"},
    {songName:"SubhanAllah", filepath:"./song/SubhanAllah.mp3",coverPath:"./covers/subah.jpg"},
    {songName:"Varaha Rupam", filepath:"./song/Varaha.mp3",coverPath:"./covers/kantara.webp"},
    {songName:"Who-Says)", filepath:"./song/Who-Says(PagalWorld).mp3",coverPath:"./covers/selena.jpg"},

]
function playaudio(e){
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
    }
    else if(audioElement.played){
        audioElement.pause();
        e.target.classList.remove('fa-pause-circle');
        
        e.target.classList.add('fa-play-circle');
    }
}
    



export default playaudio;