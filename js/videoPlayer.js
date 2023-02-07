// This code loads the IFrame Player API code asynchronously.
let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player) after the API code downloads.
let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'Sp0ssJGsdrY',
        playerVars: {
            'rel':0,
            'playsinline': 1,
        },
    });
}

const modalVideo = document.querySelector(".modal-video");
const playButton = document.querySelector(".play");
const closeButton = document.querySelector(".modal-control");

// open video player
playButton.addEventListener("click", ()=> {
    document.body.classList.add("hidden");
    modalVideo.classList.add("open");
});

// close video player
closeButton.addEventListener("click", ()=> {
    document.body.classList.remove("hidden");
    modalVideo.classList.remove("open");
    player.pauseVideo();
});