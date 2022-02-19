import MediaPlayer from "./mediaPlayer";
import AutoPlay from "./plugins/autoPlay";
import AutoPause from "./plugins/AutoPause";

const video = document.querySelector("video");
const player = new MediaPlayer(
    {
        el: video,
        plugins: [new AutoPlay(), new AutoPause()],
    }
);

const button: HTMLElement = document.querySelector("#playPause");
const muteUnmute: HTMLElement = document.querySelector("#unmuteMute");

muteUnmute.onclick = () => {
    if (player.media.muted) {
        player.unmute();
    } else {
        player.mute();
    }
}

button.onclick = () => {
    player.togglePlay();
}