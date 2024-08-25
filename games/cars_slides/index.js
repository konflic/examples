let slideIndex = 1;
let show = document.getElementById("show");

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "grid";
}

showSlides(slideIndex);


function openFullscreen() {
    if (show.requestFullscreen) {
        show.requestFullscreen();
    } else if (show.webkitRequestFullscreen) { /* Safari */
        show.webkitRequestFullscreen();
    } else if (show.msRequestFullscreen) { /* IE11 */
        show.msRequestFullscreen();
    }
}