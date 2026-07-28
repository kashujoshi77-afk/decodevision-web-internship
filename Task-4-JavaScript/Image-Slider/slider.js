let images = [
    "https://picsum.photos/id/1015/1200/700",
    "https://picsum.photos/id/1016/1200/700",
    "https://picsum.photos/id/1018/1200/700",
    "https://picsum.photos/id/1025/1200/700"
];

let currentIndex = 0;

let sliderImage = document.getElementById("sliderImage");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

let thumbnails = document.querySelectorAll(".thumbnail");


// Show Image
function showImage() {

    sliderImage.src = images[currentIndex];

    // Active thumbnail
    thumbnails.forEach(function(thumbnail) {
        thumbnail.classList.remove("active");
    });

    thumbnails[currentIndex].classList.add("active");
}


// Next Button
nextBtn.addEventListener("click", function() {

    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage();

});


// Previous Button
prevBtn.addEventListener("click", function() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage();

});


// Thumbnail Click
thumbnails.forEach(function(thumbnail) {

    thumbnail.addEventListener("click", function() {

        currentIndex = Number(thumbnail.dataset.index);

        showImage();

    });

});


// Keyboard Controls
document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowRight") {

        currentIndex++;

        if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        showImage();

    }

    if (event.key === "ArrowLeft") {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }

        showImage();

    }

});


// Mobile Swipe
let startX = 0;
let endX = 0;

sliderImage.addEventListener("touchstart", function(event) {

    startX = event.touches[0].clientX;

});

sliderImage.addEventListener("touchend", function(event) {

    endX = event.changedTouches[0].clientX;

    let swipeDistance = endX - startX;


    // Swipe Right → Previous
    if (swipeDistance > 50) {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }

        showImage();

    }


    // Swipe Left → Next
    else if (swipeDistance < -50) {

        currentIndex++;

        if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        showImage();

    }

});


// Start with first image
showImage();