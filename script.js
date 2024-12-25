// const openMenu = document.querySelector(".open-menu");
// const closeMenu = document.querySelector(".close-menu");
// const menu = document.querySelector(".menu");

// document.addEventListener("click", (event) => {
//     const element = event.target;
//     if (element.closest(".open-menu")) {
//         openMenu.classList.add("hidden");
//         openMenu.classList.remove("visible");
//         closeMenu.classList.add("visible");
//         closeMenu.classList.remove("hidden");
//         if (menu.classList.contains("opened")) {
//             menu.classList.remove("opened");
//         } else {
//             menu.classList.add("opened");
//         }
//     }
//     if (element.closest(".close-menu")) {
//         openMenu.classList.add("visible");
//         closeMenu.classList.add("hidden");
//         openMenu.classList.remove("hidden");
//         closeMenu.classList.remove("visible");
//         if (menu.classList.contains("opened")) {
//             menu.classList.remove("opened");
//         }
//     }
// });

// Кэшируем элементы
const openMenuButton = document.querySelector(".open-menu");
const closeMenuButton = document.querySelector(".close-menu");
const menu = document.querySelector(".menu");

// Функции для управления состоянием меню
const openMenu = () => {
    toggleVisibility(openMenuButton, false);
    toggleVisibility(closeMenuButton, true);
    menu.classList.add("opened");
};

const closeMenu = () => {
    toggleVisibility(openMenuButton, true);
    toggleVisibility(closeMenuButton, false);
    menu.classList.remove("opened");
};

// Утилита для управления видимостью
const toggleVisibility = (element, isVisible) => {
    element.classList.toggle("visible", isVisible);
    element.classList.toggle("hidden", !isVisible);
};

// Основной обработчик событий
document.addEventListener("click", (event) => {
    if (event.target.closest(".open-menu")) {
        openMenu();
    } else if (event.target.closest(".close-menu")) {
        closeMenu();
    }
});
