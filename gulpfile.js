const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const sass = require("gulp-sass")(require("sass"));
const pug = require("gulp-pug");
const browserSync = require("browser-sync").create();
const rename = require("gulp-rename");

// Задача для обработки стилей
gulp.task("styles", function () {
    return gulp
        .src("assets/styles/styles.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(cleanCSS())
        .pipe(rename({ basename: "styles" }))
        .pipe(gulp.dest("dist/css"));
});

// Задача для компиляции Pug
gulp.task("pug", function () {
    return gulp.src("views/**/*.pug").pipe(pug()).pipe(gulp.dest("dist"));
});

// Задача для обработки скриптов
gulp.task("scripts", function () {
    return gulp.src("assets/scripts/**/*.js").pipe(gulp.dest("dist/js"));
});

// Задача для обработки изображений и иконок
gulp.task("assets", function () {
    return gulp
        .src("assets/{images,icons}/**/*") // Копируем содержимое папок images и icons
        .pipe(gulp.dest("dist/assets")); // Сохраняем в dist/assets
});

// Задача для запуска сервера
gulp.task("serve", function () {
    browserSync.init({
        server: {
            baseDir: "./dist",
        },
    });
});

// Задача для слежения за изменениями
gulp.task("watch", function () {
    gulp.watch("assets/styles/**/*.scss", gulp.series("styles")).on("change", browserSync.reload);
    gulp.watch("views/**/*.pug", gulp.series("pug")).on("change", browserSync.reload);
    gulp.watch("assets/scripts/**/*.js", gulp.series("scripts")).on("change", browserSync.reload);
    gulp.watch("assets/{images,icons}/**/*", gulp.series("assets")).on("change", browserSync.reload);
});

// Главная задача
gulp.task("default", gulp.series("styles", "pug", "scripts", "assets", gulp.parallel("serve", "watch")));
