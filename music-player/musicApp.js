let imgArray = [];
imgArray[0] = '/denemelerim/music-player/imges/45399.png';
imgArray[1] = '/denemelerim/music-player/imges/11007600.jpg';
imgArray[2] = '/denemelerim/music-player/imges/wp8381421.png';
imgArray[3] = '/denemelerim/music-player/imges/james webb space telescope.png';
let musicArray = [];
musicArray[0] = `/denemelerim/music-player/mp3/Simge  - Aşkın Olayım (Onurr).mp3`;
musicArray[1] = `/denemelerim/music-player/mp3/Can Koç - Gökyüzünü Tutamam (Official Lyric Video).mp3`;
musicArray[2] = `/denemelerim/music-player/mp3/Aydilge - Aşk Paylaşılmaz (Official Video).mp3`;
musicArray[3] = `/denemelerim/music-player/mp3/ytmp3free.cc_kolpa-beni-aka-nandr-youtubemp3free.org.mp3`
let sarkicIisimler = [];
sarkicIisimler[0] = "Simge";
sarkicIisimler[1] = "Can Koç";
sarkicIisimler[2] = "Aydilge";
sarkicIisimler[3] = "Kolpa";
let isimler = [];
isimler[0] = "Aşkın olayım - Simge";
isimler[1] = "Gökyüzünü Tutamam - Can Koç";
isimler[2] = "Aşk Paylaşılmaz - Aydilge";
isimler[3] = "Beni Aşka İnandır - Kolpa";
const container = document.querySelector(".container");
const image = document.querySelector("#music-images");
const audio = document.querySelector("#audio");
const title = document.querySelector("#music-details .title");
const singer = document.querySelector("#music-details .singer");
const progressBar = document.querySelector("#progressBar");
const prev = document.querySelector("#prev");
const play = document.querySelector("#play");
const next = document.querySelector("#next");
const startTime = document.querySelector(".start");
const endTime = document.querySelector(".end");
const volumeBar = document.querySelector("#volume-Bar");
const volume = document.querySelector("#volume");
const list = document.querySelector(".list");
const bar = document.querySelector(".bar");

let player = new MusicPlayer(musicList);
title.innerHTML = `${player.getMusic().title} - ${player.getMusic().singer}`;
singer.innerHTML = player.getMusic().singer;
let clickCount = 2;
function playpause() {
    if (clickCount % 2 == 0) {
        play.classList.remove("fa-play");
        play.classList.add("fa-pause");
        audio.play();
    }
    else {
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
        audio.pause();
    }
    clickCount++;
}
next.addEventListener("click", function () {
    player.next();
    if (play.classList.contains("fa-pause"));
    {
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
    }
    title.innerHTML = `${player.getMusic().title} - ${player.getMusic().singer}`;
    singer.innerHTML = player.getMusic().singer;
    image.setAttribute("src", `${imgArray[player.index]}`);
    audio.setAttribute("src", `${musicArray[player.index]}`)
    playpause();
})
prev.addEventListener("click", function () {
    player.previous();
    if (play.classList.contains("fa-pause"));
    {
        play.classList.remove("fa-pause");
        play.classList.add("fa-play");
    }
    title.innerHTML = `${player.getMusic().title} - ${player.getMusic().singer}`;
    singer.innerHTML = player.getMusic().singer;
    image.setAttribute("src", `${imgArray[player.index]}`);
    audio.setAttribute("src", `${musicArray[player.index]}`)
})
audio.addEventListener("loadedmetadata", function () {
    let getDur = "";
    let time = audio.duration;
    mtime = parseInt(time);
    progressBar.setAttribute("max", `${mtime}`);
    let minutes = parseInt(time / 60);
    let seconds = parseInt(time % 60);
    if (minutes.toString().split("").length == 1) {
        minutes = `0${minutes}`;
    }
    else {
        minutes = `${minutes}`;
    }
    if (seconds.toString().split("").length == 1) {
        getDur += `${minutes}:0${seconds}`;
        endTime.innerHTML = `${minutes}:0${seconds}`;

    }
    else {
        getDur += `${minutes}:${seconds}`
        endTime.innerHTML = `${minutes}:${seconds}`;
    }
})
audio.addEventListener("timeupdate", function () {
    let time = (audio.currentTime);
    mtime = parseInt(time);
    progressBar.setAttribute("value", `${mtime}`);
    let minutes = parseInt(time / 60);
    let seconds = parseInt(time % 60);
    if (minutes.toString().split("").length == 1) {
        minutes = `0${minutes}`;
    }
    else {
        minutes = `${minutes}`;
    }
    if (seconds.toString().split("").length == 1) {
        startTime.innerHTML = `${minutes}:0${seconds}`;
    }
    else {
        startTime.innerHTML = `${minutes}:${seconds}`;
    }
})
progressBar.addEventListener("click", function () {
    audio.currentTime = progressBar.value;
})
volume.addEventListener("click", function () {
    if (volume.classList.contains("fa-volume-high")) {
        volume.classList.remove("fa-volume-high");
        volume.classList.add("fa-volume-mute");
        audio.volume = 0;
    }
    else {
        volume.classList.remove("fa-volume-mute");
        volume.classList.add("fa-volume-high");
        audio.volume = (volumeBar.value / 100);
    }
    if (volumeBar.value == 0) {
        volume.classList.remove("fa-volume-mute");
        volume.classList.add("fa-volume-high");
        volumeBar.value = 100;
        audio.volume = (volumeBar.value / 100);
    }
    else if (volumeBar.value == 100) {
        volume.classList.remove("fa-volume-high");
        volume.classList.add("fa-volume-mute");
        volumeBar.value = 0;
        audio.volume = (volumeBar.value / 100);
    }
})
volumeBar.addEventListener("click", function () {
    if (volume.classList.contains("fa-volume-mute")) {
        volume.classList.remove("fa-volume-mute");
        volume.classList.add("fa-volume-high");
    }
    audio.volume = (volumeBar.value / 100);
})
volumeBar.addEventListener("click", function () {
    if (volumeBar.value == 0) {
        volume.classList.remove("fa-volume-high");
        volume.classList.add("fa-volume-mute");
        audio.volume = 0;
    }
    else {
        volume.classList.remove("fa-volume-mute");
        volume.classList.add("fa-volume-high");
        audio.valume = volumeBar.value;
    }
})
let listItems = "";
let numberForListItem = 0;
function getDuration(src, cb) {
    var audio = new Audio();
    audio.addEventListener("loadedmetadata", function () {
        cb(audio.duration);
    });
    audio.src = src;
}
for (let i = 0; i < musicArray.length; i++) {
    getDuration(`${musicArray[i]}`, function (length) {
        let minutes = parseInt(length / 60);
        let seconds = parseInt(length % 60);
        let duration = "";
        if (minutes.toString().split("").length == 1) {
            minutes = `0${minutes}`;
        }
        else {
            minutes = `${minutes}`;
        }
        if (seconds.toString().split("").length == 1) {
            duration += `${minutes}:0${seconds}`;

        }
        else {
            duration += `${minutes}:${seconds}`;
        }
        let item =
            `
     <li class="listItems none" id="${numberForListItem++}" onclick="chooseItPlay(this)">
     <span>${player.musicList[i].getName()}</span>
     <span>${duration}</span><li>
    `
            ;
        list.insertAdjacentHTML("beforeend", item);
        listItems = document.querySelectorAll(".list li");
    });

}
let sayac = 2;
bar.addEventListener("click", function () {
    if (sayac % 2 == 0) {

        for (let i = 0; i < listItems.length; i++) {
            listItems[i].classList.remove("none");
            listItems[i].classList.add("block");
        }
    }
    else {
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].classList.add("none");
            listItems[i].classList.remove("block");
        }
    }
    sayac++

})
function chooseItPlay(input) {
    audio.src = musicArray[input.id];
    image.src = imgArray[input.id];
    title.innerHTML = isimler[input.id];
    singer.innerHTML = sarkicIisimler[input.id];
    playpause();
}
/***
 * ! bardan secilen müzik,nextteki müzikle aynı ise onu bir ilerletmek gerekir...
 */




