// btn
const btn = document.querySelector('.btn');
// Close icon
const closeIcon = document.querySelector('.close-icon');
// trailet container
const trailerContainer = document.querySelector('.trailer-container');
// cvideo
const video = document.querySelector('video');

// console.log(btn);
// console.log(closeIcon);
// console.log(trailerContainer);
// console.log(video);

btn.addEventListener('click',() => {
    trailerContainer.classList.remove('active')
});
 
closeIcon.addEventListener('click', ()=> {
    trailerContainer.classList.add('active')
    video.pause();
    video.currentTime(0);
});