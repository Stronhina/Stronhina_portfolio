'use strict';

const piano = document.querySelector('.piano');
const pianoKeys = document.querySelectorAll('.piano-key');
let isPress = false;

function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}

function removeActiveClass (key) {
    if (key.classList.contains('piano-key-active')) {
        key.classList.remove('piano-key-active');
    }
    
}

//----------------Mouse events ---------------------------
piano.addEventListener('mouseout', (event) => {
    if (event.target.classList.contains('piano-key')) {
        pianoKeys.forEach(removeActiveClass);
    }
});

piano.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('piano-key')) {
        if (isPress) {
            pianoKeys.forEach(removeActiveClass);

            event.target.classList.add('piano-key-active'); 

            const note = event.target.dataset.note;
            const src = `assets/audio/${note}.mp3`;
            playAudio(src);
        }
    }
});

piano.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('piano-key')) {
        isPress = true;
        const note = event.target.dataset.note;
        const src = `assets/audio/${note}.mp3`;
        playAudio(src);

        pianoKeys.forEach(removeActiveClass);
    
        event.target.classList.add('piano-key-active');
    }

});

document.addEventListener('mouseup', (event) => {
    isPress = false;
    if (event.target.classList.contains('piano-key')) {
        pianoKeys.forEach(removeActiveClass);
    }
});

//--------------------------Keyboard events ---------------------
window.addEventListener('keydown', (event) => {
    const key = document.querySelector(`#${event.code}`);
    if (event.repeat || key.classList.contains('piano-key-active')) return;
    if (key) {
        const note = key.dataset.note;
        const src = `assets/audio/${note}.mp3`;
        playAudio(src);
        key.classList.add('piano-key-active');
    } else {
        return;
    }
    
});

window.addEventListener('keyup', (event) => {

    const key = document.querySelector(`#${event.code}`);
    if (key.classList.contains('piano-key-active')){
        key.classList.remove('piano-key-active');
    }
    
});

//------------- Letters/Notes -------------
const btns = document.querySelectorAll('.btn');
const btnsContainer = document.querySelector('.btn-container');

btnsContainer.addEventListener('click', (event) => {
    btns.forEach((key) => {
        if (key.classList.contains('btn-active'))
        key.classList.remove('btn-active');
    });
    event.target.classList.add('btn-active');

    if (document.querySelector('.btn-letters').classList.contains('btn-active')) {
        pianoKeys.forEach((key) => {
            key.classList.add('piano-key-letter');
        });
    } else {
        pianoKeys.forEach((key) => {
            key.classList.remove('piano-key-letter');
        });
    }
});

//-------------Fullscreen --------------
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  document.querySelector('.fullscreen').addEventListener("click", (event) => {
      toggleFullScreen();
  }, false);
