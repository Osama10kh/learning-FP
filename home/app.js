const video = document.querySelector('.video');
const parag = document.querySelector('.about-us-p');
const readBtn = document.querySelector('.read-btn');

const watchBtn = document.querySelector('.watch-btn');




function displayParag() {
    readBtn.addEventListener('click', function (ev) {
        video.style.display = 'none';
        parag.style.display = 'block';
    });
}

function displayVideo() {
    watchBtn.addEventListener('click', function (ev) {
        video.style.display = 'block';
        parag.style.display = 'none';
    });
}

