import MediaPlayer from "./mediaPlayer.js";
import AutoPlay from "./plugins/autoPlay.js";
import AutoPause from "./plugins/AutoPause.ts";

const video = document.querySelector("video");
const player = new MediaPlayer(
    { 
        el: video,
        plugins: [new AutoPlay(), new AutoPause()],
    }
    );

const button = document.querySelector("#playPause");
const muteUnmute = document.querySelector("#unmuteMute");

muteUnmute.onclick = () => {
    player.unmuteMute();
}

button.onclick = () => {
    player.togglePlay();
}