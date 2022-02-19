class MediaPlayer {
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this._initPlugins();
    }
    _initPlugins() {
        this.plugins.forEach(element => {
            element.run(this);
        });
    }
    mute() {
        this.media.muted = true;
    }
    unmuteMute() {
        this.media.muted
            ? this.media.muted = false
            : this.media.muted = true;
    }
    pause() {
        this.media.pause();
    }
    play() {
        this.media.play();
    }
    togglePlay() {
        if (this.media.paused) {
            this.media.play();
        } else {
            this.media.pause();
        }
    }
}

export default MediaPlayer;