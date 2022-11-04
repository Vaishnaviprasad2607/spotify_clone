console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio("./song/Sanam.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('bar');
let songs=[
    {songName:"Night Changes", filepath:"./song/Night.mp3",coverPath:"./covers/night.jpg"},
    {songName:"Lag ja gale", filepath:"./song/Sanam.mp3",coverPath:"./covers/sanam.jpg"},
    {songName:"Singara Siriye", filepath:"./song/Singara.mp3",coverPath:"./covers/kantara.webp"},
    {songName:"SubhanAllah", filepath:"./song/SubhanAllah.mp3",coverPath:"./covers/subah.jpg"},
    {songName:"Varaha Rupam", filepath:"./song/Varaha.mp3",coverPath:"./covers/kantara.webp"},
    {songName:"Who-Says)", filepath:"./song/Who-Says(PagalWorld).mp3",coverPath:"./covers/selena.jpg"},

]
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})

myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');

})


