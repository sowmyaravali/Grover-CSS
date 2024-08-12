


function navSlide() {
    const nav = document.querySelector(".navbar");
    const menu = document.querySelector(".nav-links");
    const barlines = document.querySelector(".barlines");


    barlines.addEventListener("click", () => {
        menu.classList.toggle("nav-active");

        barlines.classList.toggle("toggle")

    })
}

navSlide();