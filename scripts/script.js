const nav = document.querySelector(".navHeader");
const menu = document.getElementById("menu");

nav.classList.remove("open");

menu.addEventListener("click", () => {
    nav.classList.toggle("open");
});


window.addEventListener("scroll", () => {
    if(nav.classList.contains("open")){
        nav.classList.remove("open");
    }
});