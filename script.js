const explore = () => {
    document.getElementsByClassName('box')[0].style.backgroundColor = '#2e492a'
}
const unexplore = () => {
    document.getElementsByClassName('box')[0].style.removeProperty("background-color")
}
// -----------------------------
let songs = [
    { songName: "Aadat_Se.mp3", filepath: "Aadat_Se.mp3", coverpath: "" },
    { songName: "BESABRIYAAN.mp3", filepath: "BESABRIYAAN.mp3", coverpath: "" },
    // { songName: "Tujh_Mein_Rab_Dikhta_Hai_yara", filepath: "Tujh_Mein_Rab_Dikhta_Hai_.mp3", coverpath: "" },
    { songName: "isqtera.mp3", filepath: "isqtera.mp3", coverpath: "" },
    { songName: "Kaala_Jaadu.mp3", filepath: "Kaala_Jaadu.mp3", coverpath: "" },
    { songName: "Thug_Le.mp3", filepath: "Thug_Le.mp3", coverpath: "" },
    // { songName: "Zara_Zara_Bahekta_Hai_|_JalRaj_", filepath: "Zara_Zara_Bahekta_Hai__JalRaj__.mp3", coverpath: "" },
]
// ------------------------------------
let audio2 = new Audio('Thug_Le.mp3')
let audio3=new Audio('Aadat_Se.mp3')
let audio4=new Audio('BESABRIYAAN.mp3')
let audio5=new Audio('Kaala_Jaadu.mp3')
let audio = new Audio('isqtera.mp3')
// let arrp=['palyIcon1','playIcon2','playIcon3','playIcon4','playIcon5']
// let numarr = ['0', '1', '2', '3', '4', '5']
// console.log(arrp[2])
// console.log(numarr[2])
let playIcon0 = document.getElementsByClassName('playIcon')[0]
let playIcon1 = document.getElementsByClassName('playIcon')[1]
let playIcon2 = document.getElementsByClassName('playIcon')[2]
let playIcon3 = document.getElementsByClassName('playIcon')[3]
let playIcon4 = document.getElementsByClassName('playIcon')[4]
// let playIcon = document.getElementsByClassName('playIcon')[]
// console.log(playIcon)
// Array.from(document.getElementsByClassName('fa-circle-play')).forEach((element) =>e {
//     element.addEventListener('click', () => {
//         if (audio2.paused) {
// songIndex = (e.target.id);
// audio2.src = songs[i].filepath;
//             audio2.play();
//             playIcon.classList.remove("fa-circle-play")
//             playIcon.classList.add("fa-circle-pause")
//         } else if (audio2.play) {
//             audio2.pause();
//             playIcon.classList.add("fa-circle-play")
//             playIcon.classList.remove("fa-circle-pause")
//         }
//     })
// })
document.getElementsByClassName('fa-circle-play')[0].addEventListener('click', () => {
    if (audio2.paused) {
        // songIndex = (e.target.id);
        // audio2.src = songs[i].filepath;
        audio2.play();
        playIcon0.classList.remove("fa-circle-play")
        playIcon0.classList.add("fa-circle-pause")
    } else if (audio2.play) {
        audio2.pause();
        playIcon0.classList.add("fa-circle-play")
        playIcon0.classList.remove("fa-circle-pause")
    }
})
document.getElementsByClassName('fa-circle-play')[1].addEventListener('click', (e) => {
    if (audio3.paused) {
        // songIndex = (e.target.id);
        // audio2.src = songs[i].filepath;
        audio3.play();
        playIcon1.classList.remove("fa-circle-play")
        playIcon1.classList.add("fa-circle-pause")
    } else if (audio3.play) {
        audio3.pause();
        playIcon1.classList.add("fa-circle-play")
        playIcon1.classList.remove("fa-circle-pause")
    }
})
document.getElementsByClassName('fa-circle-play')[2].addEventListener('click', (e) => {
    if (audio4.paused) {
        // songIndex = (e.target.id);
        // audio2.src = songs[i].filepath;
        audio4.play();
        playIcon2.classList.remove("fa-circle-play")
        playIcon2.classList.add("fa-circle-pause")
    } else if (audio4.play) {
        audio4.pause();
        playIcon2.classList.add("fa-circle-play")
        playIcon2.classList.remove("fa-circle-pause")
    }
})
document.getElementsByClassName('fa-circle-play')[3].addEventListener('click', (e) => {
    if (audio5.paused) {
        // songIndex = (e.target.id);
        // audio2.src = songs[i].filepath;
        // audio.pause()
        // audio2.pause()
        // audio3.pause()
        // audio4.pause()
        // audio5.play();
        playIcon3.classList.remove("fa-circle-play")
        playIcon3.classList.add("fa-circle-pause")
    } else if (audio5.play) {
        audio5.pause();
        playIcon3.classList.add("fa-circle-play")
        playIcon3.classList.remove("fa-circle-pause")
    }
})
document.getElementsByClassName('fa-circle-play')[4].addEventListener('click', (e) => {
    if (audio.paused) {
        // songIndex = (e.target.id);
        // audio2.src = songs[i].filepath;
        audio.play();
        playIcon4.classList.remove("fa-circle-play")
        playIcon4.classList.add("fa-circle-pause")
    } else if (audio.play) {
        audio.pause();
        playIcon4.classList.add("fa-circle-play")
        playIcon4.classList.remove("fa-circle-pause")
    }
})
// ---------------------------------------------------------------
audio2.addEventListener('timeupdate', () => {
    console.log("timeupdate");
    progress = parseInt((audio2.currentTime / audio2.duration) * 100)
    console.log(progress);
    let range = document.getElementById("progressbar0")
    range.value = progress;
})
let range = document.getElementById("progressbar0")
range.addEventListener('change', () => {
    audio2.currentTime = range.value * audio2.duration / 100;
})
// ----------------------------------------------------------------------

audio3.addEventListener('timeupdate', () => {
    console.log("timeupdate");
    progress = parseInt((audio3.currentTime / audio3.duration) * 100)
    console.log(progress);
    let range1 = document.getElementById("progressbar1")
    range1.value = progress;
})
let range1 = document.getElementById("progressbar1")
range1.addEventListener('change', () => {
    audio3.currentTime = range.value * audio3.duration / 100;
})


audio4.addEventListener('timeupdate', () => {
    console.log("timeupdate");
    progress = parseInt((audio4.currentTime / audio4.duration) * 100)
    console.log(progress);
    let range2 = document.getElementById("progressbar2")
    range2.value = progress;
})
let range2= document.getElementById("progressbar2")
range2.addEventListener('change', () => {
    audio4.currentTime = range.value * audio4.duration / 100;
})


audio5.addEventListener('timeupdate', () => {
    console.log("timeupdate");
    progress = parseInt((audio5.currentTime / audio5.duration) * 100)
    console.log(progress);
    let range3 = document.getElementById("progressbar3")
    range3.value = progress;
})
let range3 = document.getElementById("progressbar3")
range3.addEventListener('change', () => {
    audio5.currentTime = range.value * audio5.duration / 100;
})

audio.addEventListener('timeupdate', () => {
    console.log("timeupdate");
    progress = parseInt((audio.currentTime / audio.duration) * 100)
    console.log(progress);
    let range4 = document.getElementById("progressbar4")
    range4.value = progress;
})
let range4 = document.getElementById("progressbar4")
range.addEventListener('change', () => {
    audio.currentTime = range.value * audio.duration / 100;
})
