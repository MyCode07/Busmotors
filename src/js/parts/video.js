const videoElement = document.querySelector('section.video');
if (videoElement) {
    const video = videoElement.querySelector("#video");
    const videoThumbnail = videoElement.querySelector("#video-thumbnail");
    const playpause = videoElement.querySelector("#play-pause");
    const frwd = videoElement.querySelector("#skip-10");
    const bkwrd = videoElement.querySelector("#skipminus-10");
    const volume = videoElement.querySelector("#volume");
    const mutebtn = videoElement.querySelector("#mute");
    const videoContainer = videoElement.querySelector(".video-container");
    const controls = videoElement.querySelector(".controls");
    const progressBar = videoElement.querySelector(".progress-bar");
    const playbackline = videoElement.querySelector(".playback-line");
    const currentTimeRef = videoElement.querySelector("#current-time");
    const maxDuration = videoElement.querySelector("#max-duration");
    const myplay = videoElement.querySelector(".play");

    const timeFormatter = (timeInput) => {
        let minute = Math.floor(timeInput / 60);
        minute = minute < 10 ? "0" + minute : minute;
        let second = Math.floor(timeInput % 60);
        second = second < 10 ? "0" + second : second;
        return `${minute}:${second}`;
    };

    myplay.addEventListener("click", function (e) {
        if (video.paused) {
            myplay.style.transform = 'translate(-50%, -50%) scale(0)'
        }
        else {
            myplay.style.transform = 'translate(-50%, -50%) scale(1);'
        }

        if (video.paused) {
            videoThumbnail.style.display = "none";
            video.play();
            playpause.innerHTML = '<i class="fa-solid fa-pause"></i>';
        }
        else {
            video.pause();
            playpause.innerHTML = '<i class="fa-solid fa-play"></i>';
        }
    });

    playpause.addEventListener("click", function () {
        if (video.paused) {
            videoThumbnail.style.display = "none";
            video.play();
            playpause.innerHTML = '<i class="fa-solid fa-pause"></i>';
            myplay.style.transform = 'translate(-50%, -50%) scale(0)'
        }
        else {
            video.pause();
            playpause.innerHTML = '<i class="fa-solid fa-play"></i>';
        }
    });

    let isPlaying = false;

    function togglePlayPause() {
        if (isPlaying) {
            video.pause();
            playpause.innerHTML = '<i class="fa-solid fa-play"></i>';
        }
        else {
            videoThumbnail.style.display = "none";
            video.play();
            playpause.innerHTML = '<i class="fa-solid fa-pause"></i>';
        }
        isPlaying = !isPlaying;
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === 32 || event.key === " ") {
            event.preventDefault();

            togglePlayPause();
        }
    });

    video.addEventListener("play", function () {
        isPlaying = true;
    });

    video.addEventListener("pause", function () {
        isPlaying = false;
    });

    video.addEventListener("ended", function () {
        playpause.innerHTML = '<i class="fa-solid fa-play"></i>';
    });

    frwd.addEventListener("click", function () {
        video.currentTime += 5;
    });
    bkwrd.addEventListener("click", function () {
        video.currentTime -= 5;
    });

    mutebtn.addEventListener("click", function () {
        if (video.muted) {
            video.muted = false;
            mutebtn.innerHTML = '<i class="fas fa-volume-up"></i>';
            volume.value = video.volume;
        }
        else {
            video.muted = true;
            mutebtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
            volume.value = 0;
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "M" || event.key === "m") {
            event.preventDefault();
            if (video.muted) {
                video.muted = false;
                mutebtn.innerHTML = '<i class="fas fa-volume-up"></i>';
                volume.value = video.volume;
            }
            else {
                video.muted = true;
                mutebtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
                volume.value = 0;
            }
        }
    });

    volume.addEventListener("input", function () {
        video.volume = volume.value;
        if (video.volume === 0) {
            mutebtn.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        }
        else {
            mutebtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
    });

    videoContainer.addEventListener("mouseenter", () => {
        controls.style.opacity = 1;
    });

    videoContainer.addEventListener("mouseleave", () => {
        controls.style.opacity = 0;
    });

    video.addEventListener("timeupdate", () => {
        const currentTime = video.currentTime;
        const duration = video.duration;
        const percentage = (currentTime / duration) * 100;
        progressBar.style.width = percentage + "%";
    });

    function showThumbnail() {
        videoThumbnail.style.display = "block";
    }

    video.addEventListener("ended", () => {
        progressBar.style.width = "0%";
        showThumbnail();
    });

    setInterval(() => {
        currentTimeRef.innerHTML = timeFormatter(video.currentTime);
        maxDuration.innerText = timeFormatter(video.duration);
    }, 1);

    playbackline.addEventListener("click", (e) => {
        let timelineWidth = playbackline.clientWidth;
        video.currentTime = (e.offsetX / timelineWidth) * video.duration;
    });
}
