const images = [];
const imgElements = document.getElementsByClassName("smallImg");
let currentIndex = 6;
let lastChange = 6;
const pulseIndex = [0, 3, 16];
const elegyIndex = [1, 7, 9, 13, 21];
const contIndex = [2, 4, 10, 19];
const shadowIndex = [5, 8, 17, 18, 20, 22];
const playIndex = [6, 12];
const inaccIndex = [11, 14];
const rainIndex = [15];

document.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i < 23; i++){
        images.push("img/thumbnail/smallThumbnailLibrary/sm" + i + ".jpg");
    }
    // console.log(images.length);
});



function changeImage() {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    let roll = Math.floor(Math.random() * (imgElements.length));

    while (roll == lastChange){
        roll = Math.floor(Math.random() * (imgElements.length));
    }
    imgElements[roll].classList.add('fade-out');
    setTimeout(() => {
        imgElements[roll].src = images[currentIndex];
        

        if (pulseIndex.includes(currentIndex)){
            imgElements[roll].parentElement.href = "pulse.html";
        } else if (elegyIndex.includes(currentIndex)){
            imgElements[roll].parentElement.href = "elegy.html";
        } else if (contIndex.includes(currentIndex)){
            imgElements[roll].parentElement.href = "continued_life.html";
        } else if (shadowIndex.includes(currentIndex)){
            imgElements[roll].parentElement.href = "shadow.html";
        } else if (inaccIndex.includes(currentIndex)){
            imgElements[roll].parentElement.href = "inaccessible_text.html";
        } else if (playIndex.includes(currentIndex)){
            imgElements[roll].parentElement.href = "playground.html";
        } else {
            imgElements[roll].parentElement.href = "raindrop.html";
        }

        
        imgElements[roll].classList.remove('fade-out');

    }, 1000);
    lastChange = roll;
}

setInterval(changeImage, 2500);