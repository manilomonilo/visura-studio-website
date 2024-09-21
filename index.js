const btn = document.getElementById("black-screen")
const audio = document.getElementById("black-screen-audio")
const nav = document.getElementById("nav")
const logo = document.getElementById("logo")
const mainSecContent = document.getElementById("main-section-content")

btn.addEventListener("click", function() {
    nav.classList.toggle("nav-slid");
    logo.classList.toggle("logo-right");
    mainSecContent.classList.toggle("main-section-content-slid");
    audio.play();
    btn.classList.toggle("changed");
});
