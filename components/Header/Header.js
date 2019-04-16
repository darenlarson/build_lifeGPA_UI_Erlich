const title = document.querySelector(".header-content h1");
const headerBtn = document.querySelector(".header-content button");

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
        headerBtn.classList.replace("hide-header", "show-navigation");
    } else {
        setTimeout(() => headerBtn.classList.replace("hide-header", "roll-in-right"), timeTitle + 1100)
    }
})
