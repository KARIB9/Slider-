const slides = document.querySelectorAll('.slide')
let indexSlide = 1
showSlide(indexSlide)

function showSlide(index) {
    if (index > slides.length) {
        indexSlide = 1
    } else if (index < 1) {
        indexSlide = slides.length
    }

    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }

    slides[indexSlide - 1].style.display = 'flex'
}

function nextSlide() { showSlide(indexSlide += 1) }
function prevSlide() { showSlide(indexSlide -= 1) }