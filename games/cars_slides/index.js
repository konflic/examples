let slideIndex = 0;
let show = document.getElementById("show");
let amount = 18;

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "grid";
}

function openFullscreen() {
    if (show.requestFullscreen) {
        show.requestFullscreen();
    } else if (show.webkitRequestFullscreen) { /* Safari */
        show.webkitRequestFullscreen();
    } else if (show.msRequestFullscreen) { /* IE11 */
        show.msRequestFullscreen();
    }
}

function generateSlides() {
    let container = document.getElementById("show");
    for (i = 0; i < amount; i++) {        
        let upper_div = document.createElement("DIV");
        upper_div.classList.add("mySlides");
        upper_div.classList.add("fade");
        let img_el = document.createElement("IMG");
        img_el.src = `pictures/${i}.jpg`
        upper_div.appendChild(img_el);
        container.prepend(upper_div);
    }
}

generateSlides();

showSlides(slideIndex);


