const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const menu = document.querySelector(".menu");

function toggleMenu() {
    if (menu.classList.contains("opened")) {
        menu.classList.remove("opened");
        openMenu.classList.remove("hidden");
        closeMenu.classList.add("visible");
    } else {
        menu.classList.add("opened");
        openMenu.classList.add("hidden");
        closeMenu.classList.remove("hidden");
    }
}

if (openMenu && closeMenu && menu) {
    openMenu.addEventListener("click", toggleMenu);
    closeMenu.addEventListener("click", toggleMenu);
}
