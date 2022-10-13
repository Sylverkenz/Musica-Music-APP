const music = [
  {
    id: 0,
    artist: "Oxlade",
    title: "Ku Lo Sa",
    img: "images/kulosa.png",
    music: "music/kulosa.mp3",
    tag: ["oxlade", "kulosa"],
    album: "single",
  },
  {
    id: 1,
    artist: "Wizkid",
    title: "Bad To Me",
    img: "images/bad-to-me.png",
    music: "music/bad-to-me.mp3",
    tag: ["wizkid", "bad to me"],
    album: "single",
  },

  {
    id: 2,
    artist: "BlaqBonez, JAE5",
    title: "Back In Uni",
    img: "images/back-in-uni.png",
    music: "music/back-in-uni.mp3",
    tag: ["blaqbonez", "jae5", "back to uni"],
    album: "single",
  },

  {
    id: 3,
    artist: "Joeboy",
    title: "Contour",
    img: "images/contour.png",
    music: "music/contour.mp3",
    tag: ["joeboy", "contour"],
    album: "single",
  },
  {
    id: 4,
    artist: "Pheelz, Davido",
    title: "Electricity",
    img: "images/electricity.png",
    music: "music/electricity.mp3",
    tag: ["pheelz", "davido", "electricity"],
    album: "single",
  },
  {
    id: 5,
    artist: "BlaqBonez",
    title: "Commander",
    img: "images/commander.png",
    music: "music/commander.mp3",
    tag: ["blaqbonez", "commander"],
    album: "single",
  },
  {
    id: 6,
    artist: "Pheelz, BNXN",
    title: "Finesse",
    img: "images/finesse.png",
    music: "music/finesse.mp3",
    tag: ["pheelz", "bnxn", "finesse"],
    album: "single",
  },
  {
    id: 7,
    artist: "Asake",
    title: "Joha",
    img: "images/joha.png",
    music: "music/joha.mp3",
    tag: ["asake", "joha"],
    album: "Mr Money With The Vibe",
  },
  {
    id: 8,
    artist: "Lojay",
    title: "Leader",
    img: "images/leader.png",
    music: "music/leader.mp3",
    tag: ["lojay", "leader"],
    album: "single",
  },
  {
    id: 9,
    artist: "Joeboy",
    title: "Likkle Riddim",
    img: "images/likkle-riddim.png",
    music: "music/likkle-riddim.mp3",
    tag: ["joeboy", "likkle riddim"],
    album: "single",
  },
  {
    id: 10,
    artist: "Bella Shmurda",
    title: "New Born Fela",
    img: "images/new-born-fela.png",
    music: "music/new-born-fela.mp3",
    tag: ["bella", "new born fela"],
    album: "single",
  },
  {
    id: 11,
    artist: "M.I. Abaga",
    title: "The Guy",
    img: "images/the-guy.png",
    music: "music/the-guy.mp3",
    tag: ["m.i", "the guy", "mi"],
    album: "The Guy",
  },
  {
    id: 12,
    artist: "Jae5, BNXN",
    title: "Propeller",
    img: "images/propeller.png",
    music: "music/propeller.mp3",
    tag: ["jae5", "bnxn", "propeller"],
    album: "single",
  },
  {
    id: 13,
    artist: "Omah Lay",
    title: "I'm A Mess",
    img: "images/i'm-a-mess.png",
    music: "music/i'm-a-mess.mp3",
    tag: ["omah lay", "i'm a mess"],
    album: "single",
  },
  {
    id: 14,
    artist: "FireboyDml, Asake",
    title: "Bandana",
    img: "images/bandana.png",
    music: "music/bandana.mp3",
    tag: ["asake", "fireboy", "bandana"],
    album: "single",
  },
];

///// DOM SELECTIONS////
const header = document.querySelector(".header");

const sidebar = document.querySelector(".sidebar");
const navlinks = document.querySelectorAll(".navlink");
const content = document.querySelectorAll(".content");

const searchBtn = document.querySelector(".header__searchbtn");
const search = document.querySelector(".header__search");
const form = document.querySelector(".header__searchbox");
const revealform = document.querySelector(".searchbtn");

const toggle = document.querySelector(".toggle");
const navBackground = document.querySelector(".nav__background");
const navigation = document.querySelector(".navigation");

const musicContainer = document.querySelector(".music-container");

const musicInfo = document.querySelector(".music-info");
const musicTitle = document.querySelector(".title");
const musicArtist = document.querySelector(".artist");
const musicCover = document.querySelector(".cover");
const audio = document.querySelector(".audio");

const progressContainer = document.querySelector(".progress-container");
const progress = document.querySelector(".progress-bar");
const play = document.getElementById("play");
const shuffle = document.getElementById("shuffle");
const repeat = document.getElementById("repeat");

const backward = document.getElementById("backward");
const forward = document.getElementById("forward");

const volume = document.querySelector(".music-volume");
const volumeContainer = document.querySelector(".volume-container");
const volumeBar = document.querySelector(".volume-bar");

const songSlide = document.querySelector(".playlist__songslide");
const musicList = document.querySelector(".musiclist");
const colWrapper = document.querySelector(".collection-wrapper");
const playAll = document.querySelectorAll(".playbtn");

let curSong = 0;
loadSong(music);

///FUNCTIONS/////

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function loadSong(song) {
  musicTitle.textContent = song[curSong].title;
  musicArtist.textContent = song[curSong].artist;
  musicCover.src = song[curSong].img;
  audio.src = song[curSong].music;
}

function playSong() {
  musicContainer.classList.add("play");
  play.querySelector(".fa-solid").classList.remove("fa-play");
  play.querySelector(".fa-solid").classList.add("fa-pause");
  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove("play");
  play.querySelector(".fa-solid").classList.remove("fa-pause");
  play.querySelector(".fa-solid").classList.add("fa-play");
  audio.pause();
}

function nextSong() {
  if (shuffle.classList.contains("active")) shuffleSong();
  if (repeat.classList.contains("active")) repeatSong();
  curSong++;
  if (curSong > music.length - 1) curSong = 0;
  loadSong(music);
  playSong();
}

function prevSong() {
  curSong--;
  if (curSong < 0) curSong = music.length - 1;
  loadSong(music);
  playSong();
}

function shuffleSong() {
  const randomSong = getRndInteger(0, music.length - 1);
  if (randomSong !== curSong) curSong = randomSong;

  loadSong(music);
  playSong();
}

function repeatSong() {
  audio.loop = true;
  curSong = curSong;
  loadSong(music);
  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

function showNav() {
  toggle.firstChild.classList.remove("fa-bars");
  toggle.firstChild.classList.add("fa-arrow-left");

  if (navBackground.classList.contains("close")) {
    navBackground.classList.remove("close");
    navBackground.classList.add("open");
    navigation.classList.remove("close");
    navigation.classList.add("open");
  }
}

function closeNav() {
  toggle.firstChild.classList.remove("fa-arrow-left");
  toggle.firstChild.classList.add("fa-bars");
  if (navBackground.classList.contains("open")) {
    navBackground.classList.remove("open");
    navBackground.classList.add("close");
    navigation.classList.remove("open");
    navigation.classList.add("close");
  }
}

function loadSlide(arr) {
  const songlists = arr
    .map((song) => {
      return `<figure class="song-info" >
                <img
                  src=${song.img}
                  alt=""
                  class="w-[15rem] h-[15rem] rounded-[2.5rem]"
                  data-id=${song.id}
                />
                <p class="text-[1.4rem] mt-4">${song.title}</p>
              </figure>`;
    })
    .join("");
  songSlide.innerHTML = songlists;
}

function loadChart(arr) {
  const songlists = arr
    .map((song) => {
      return `<article
                  class="px-6 py-4 lg:px-4 lg:py-2 lg:pr-12 bg-[rgba(255,255,255,0.07)] backdrop-blur-[5px] rounded-[1.5rem] mb-[1.4rem]"
                  data-id=${song.id}
                >
                <div class="song flex lg:justify-between items-center"
                data-id=${song.id}>
                  <figure class="flex items-center gap-8 mr-[1.4rem] lg:mr-0" data-id=${song.id}>
                    <img
                      src=${song.img}
                      alt=""
                      class="w-20 h-20 rounded-full"
                      data-id=${song.id}
                    />
                    <span class="hidden lg:block text-[1.4rem] text-gray-500"
                      ><i class="fa-solid fa-heart"></i
                    ></span>
                  </figure>

                  <div
                    class="lg:flex justify-between lg:w-[37%] mr-auto lg:mr-0"
                    data-id=${song.id}
                  >
                    <p class="text-[1.2rem] capitalize" data-id=${song.id}>${song.title} - <span class="artiste"
                    data-id=${song.id}>${song.artist}</span>
                    </p>
                    <p class="text-[1.2rem] capitalize">${song.album}</p>
                  </div>

                  <div
                    class="flex flex-col-reverse items-end lg:items-center lg:flex-row lg:gap-[25rem] lg:justify-end lg:w-[40%]"
                    data-id=${song.id}
                  >
                    <p class="text-[1.2rem] capitalize">1:30</p>
                    <span class="text-[1.2rem] text-[#FACD66]">
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                    </span>
                  </div>
                  </div>
                </article>`;
    })
    .join("");
  musicList.innerHTML = songlists;
}

function loadCollections(arr) {
  const songlists = arr
    .map((song) => {
      return `<figure
              class="collection group relative lg:w-[21rem] h-[25rem] overflow-hidden rounded-[2rem]"
              data-id="${song.id}"
            >
              <img
                src=${song.img}
                alt=""
                class="w-full h-full lg:group-hover:scale-[1.2] duration-300 object-cover"
              />
              <div
                class=" z-10 overlay flex items-center absolute bottom-0 w-full p-8 text-[#EFEEE0] lg:translate-y-[4rem] lg:group-hover:translate-y-0 duration-300 capitalize"
              >
                <div>
                  <h4 class="text-[2rem] mb-8">
                    ${song.title}<span class="block text-[1rem] opacity-75"
                      >${song.artist}</span
                    >
                  </h4>
                  <p class="text-[1.2rem]">23m Likes</p>
                </div>
                <button
                  class="w-[4rem] h-[4rem] lg:opacity-0 text-[1.4rem] rounded-full bg-[#FACD66] ml-auto -mb-8 group-hover:opacity-100 duration-300"
                >
                  <i class="fa-solid fa-play"></i>
                </button>
              </div>
            </figure>`;
    })
    .join("");
  colWrapper.innerHTML = songlists;
}

/// EVENT LISTENERS ///

play.addEventListener("click", function () {
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) pauseSong();
  else playSong();
});

forward.addEventListener("click", nextSong);

backward.addEventListener("click", prevSong);

shuffle.addEventListener("click", function (e) {
  e.currentTarget.classList.toggle("active");
});
repeat.addEventListener("click", function (e) {
  e.currentTarget.classList.toggle("active");
});

audio.addEventListener("timeupdate", updateProgress);

audio.addEventListener("ended", function (e) {
  if (shuffle.classList.contains("active")) shuffleSong();
  if (repeat.classList.contains("active")) repeatSong();
  if (
    shuffle.classList.contains("active") &&
    repeat.classList.contains("active")
  )
    repeatSong();
});

progressContainer.addEventListener("click", setProgress);

sidebar.addEventListener("click", function (e) {
  const clicked = e.target.closest(".navlink");

  if (!clicked) return;
  const target = clicked.dataset.id;

  navlinks.forEach((link) => link.classList.remove("navlink--active"));
  clicked.classList.add("navlink--active");

  content.forEach((content) => content.classList.remove("content--active"));
  document
    .querySelector(`.content--${target}`)
    .classList.add("content--active");
  closeNav();
});

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const filtered = music.filter((song) =>
    song.tag.includes(search.value.toLowerCase())
  );

  if (search.value !== "") {
    loadSlide(filtered);
    loadChart(filtered);
    loadCollections(filtered);
  } else {
    loadSlide(music);
    loadChart(music);
    loadCollections(music);
  }
});

revealform.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-magnifying-glass")) {
    e.target.classList.remove("fa-magnifying-glass");
    e.target.classList.add("fa-circle-xmark");
  } else {
    e.target.classList.add("fa-magnifying-glass");
    e.target.classList.remove("fa-circle-xmark");
  }

  form.classList.toggle("show");
});

toggle.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-bars")) showNav();
  else closeNav();
});

window.addEventListener("DOMContentLoaded", function (e) {
  loadSlide(music);
  loadChart(music);
  loadCollections(music);
});

songSlide.addEventListener("click", function (e) {
  const songId = Number(e.target.dataset.id);
  curSong = songId;
  loadSong(music);
  playSong();
});

musicList.addEventListener("click", function (e) {
  const songId = Number(e.target.dataset.id);
  curSong = songId;
  loadSong(music);
  playSong();
});

colWrapper.addEventListener("click", function (e) {
  const songId = Number(e.target.dataset.id);
  curSong = songId;
  loadSong(music);
  playSong();
});

window.addEventListener("scroll", function (e) {
  const scrollHeight = e.currentTarget.scrollY;
  if (scrollHeight > 200) {
    header.classList.add("fixed-header");
  } else header.classList.remove("fixed-header");
});

document
  .querySelectorAll(".duration")
  .forEach(
    (duration) =>
      (duration.textContent = `${music.length} Songs ~ ${
        (90 * music.length) / 60
      } Mins+`)
  );

playAll.forEach((playall) =>
  playall.addEventListener("click", function (e) {
    curSong = 0;
    loadSong(music);
    playSong();
  })
);

// let sound = audio.volume;
volumeBar.style.width = `${audio.volume * 100}%`;

volume.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-volume-high")) {
    audio.volume += 0.1;
    if (audio.volume < 0.1) audio.volume = 0.0;
    if (audio.volume > 0) {
      volume.querySelector(".low").classList.add("fa-volume-low");
      volume.querySelector(".low").classList.remove("fa-volume-xmark");
    }
    if (audio.volume > 1) audio.volume = 1;

    volumeBar.style.width = `${audio.volume * 100}%`;
  }

  if (e.target.classList.contains("fa-volume-low")) {
    audio.volume -= 0.1;

    if (audio.volume < 0.1) {
      audio.volume = 0.0;
      e.target.classList.remove("fa-volume-low");
      e.target.classList.add("fa-volume-xmark");
    }
    if (audio.volume > 1) audio.volume = 1;
    volumeBar.style.width = `${audio.volume * 100}%`;
  }
});
