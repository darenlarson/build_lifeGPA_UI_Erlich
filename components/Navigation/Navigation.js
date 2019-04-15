const logo = document.querySelector(".navigation h1");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const login = document.querySelector("#login");
const mobile = window.matchMedia("(max-width: 500px)");

const timeHome = 1000;

window.addEventListener("load", event => {
    if(mobile.matches) {
        logo.classList.replace("hide-navigation", "show-navigation");
    } else {
        logo.classList.replace("hide-navigation", "fade-in-top");
    }
})

window.addEventListener("load", event => {
    if(mobile.matches) {
        home.classList.replace("hide-navigation", "show-navigation");
    } else {
        setTimeout(() => home.classList.replace("hide-navigation", "fade-in-left"), timeHome)   
    }
})

window.addEventListener("load", event => {
    if(mobile.matches) {
        about.classList.replace("hide-navigation", "show-navigation");
    } else {
        setTimeout(() => about.classList.replace("hide-navigation", "fade-in-left"), timeHome + 200)   
    }
})

window.addEventListener("load", event => {
    if(mobile.matches) {
        contact.classList.replace("hide-navigation", "show-navigation");
    } else {
        setTimeout(() => contact.classList.replace("hide-navigation", "fade-in-left"), timeHome + 400)   
    }
})

window.addEventListener("load", event => {
    if(mobile.matches) {
        login.classList.replace("hide-navigation", "show-navigation");
    } else {
        setTimeout(() => login.classList.replace("hide-navigation", "fade-in-left"), timeHome + 600)   
    }
})
