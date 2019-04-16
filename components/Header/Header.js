const title = document.querySelector(".header-content h1");
const arrow = document.querySelector(".header-content img");

const timeTitle = 950;

window.addEventListener("load", event => {
    if(mobile.matches) {
        title.classList.replace("hide-header", "show-navigation");
    } else {
        setTimeout(() => title.classList.replace("hide-header", "fade-in-top"), timeTitle)
    }
})

window.addEventListener("load", event => {
    if(mobile.matches) {
        arrow.classList.replace("hide-header", "show-navigation");
    } else {
        setTimeout(() => arrow.classList.replace("hide-header", "fade-in-top"), timeTitle + 350)
    }
})

