const notes = document.querySelectorAll('.note');
const volume = document.querySelector('.volume input');

let allAudios = [];
let audio = new Audio('./audios/a.wav');

const pianoPlay = (note) => {
    audio.src = `./audios/${note}.wav`;
    audio.play();

    const clickKey = document.querySelector(`[data-key="${note}"]`);
    clickKey.classList.add('active');
    setTimeout(() => {
        clickKey.classList.remove('active');
    }, 150);
};

notes.forEach((note) => {
    allAudios.push(note.dataset.key);
    note.addEventListener('click', () => pianoPlay(note.dataset.key));
});

const pressKey = (e) => {
    pianoPlay(e.key);
};

document.addEventListener('keydown', pressKey);

function slideVolume(e) {
    audio.volume = e.target.value;
}

volume.addEventListener('input', slideVolume);
function slideVolume(e) {
    const volumeBar = e.target;
    volumeBar.style.background = `linear-gradient(to right, yellow 0%, yellow ${volumeBar.value * 100}%, transparent ${volumeBar.value * 100}%, transparent 100%)`;
}

volume.addEventListener('input', slideVolume);
