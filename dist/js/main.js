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

// Ждем, пока вся HTML-страница загрузится и будет готова к работе
document.addEventListener("DOMContentLoaded", () => {
    // Находим все элементы с классом "block"
    const blocks = document.querySelectorAll(".profit-card");

    // Создаем новый наблюдатель (Intersection Observer) для отслеживания появления элементов в зоне видимости
    const observer = new IntersectionObserver(
        (entries) => {
            // Для каждого наблюдаемого элемента (entry)
            entries.forEach((entry) => {
                // Проверяем, находится ли элемент в зоне видимости
                if (entry.isIntersecting) {
                    // Если элемент появился на экране, добавляем ему класс "show"
                    entry.target.classList.add("show");
                }
            });
        },
        {
            // Указываем порог видимости элемента: 20% (0.2) блока должно быть видно, чтобы он считался видимым
            threshold: 0.2,
        }
    );

    // Для каждого элемента из найденных блоков добавляем наблюдатель
    blocks.forEach((block) => observer.observe(block));
});

// Инициализация Swiper
document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".swiper", {
        direction: "horizontal", // Горизонтальный слайдер (по умолчанию)
        loop: true, // Бесконечная прокрутка

        // Навигационные кнопки
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        // Пагинация (точки)
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        // Автопрокрутка
        // autoplay: {
        //     delay: 3000, // Задержка между слайдами (в миллисекундах)
        //     disableOnInteraction: false,
        // },
        // Количество слайдов, видимых одновременно
        slidesPerView: 2, // По умолчанию показываем 2 слайда
        spaceBetween: 24, // Расстояние между слайдами (в пикселях)

        // Адаптивные настройки
        breakpoints: {
            // На устройствах с шириной экрана <= 768px (планшеты и телефоны)
            // 768: {
            //     slidesPerView: 1, // Показывать 1 слайд
            // },
        },
    });
});
