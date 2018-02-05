var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync = require('browser-sync'), // Подключаем Browser Sync
    cssnano = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    rename = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
    concat = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    htmlmin = require('gulp-htmlmin'), // Подключаем gulp-htmlmin (для минификации html)
    uglify = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
    del = require('del'), // Подключаем библиотеку для удаления файлов и папок
    imagemin = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
    pngquant = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
    rigger = require('gulp-rigger'), // Подключаем rigger (для сборки html)
    autoprefixer = require('gulp-autoprefixer'), // Подключаем autoprefixer
    postcss = require('gulp-postcss'),
    uncss = require('postcss-uncss'),
    webp = require('gulp-webp'), // Подключаем преобразователь изображений в webp
    svgmin = require('gulp-svgmin'), // Подключаем Минификатор svg
    fontmin = require('gulp-fontmin'), // Подключаем библиотеку для минификации шрифтов
    //babel = require('gulp-babel'), // Подключаем babel для работы с es6
    plumber = require('gulp-plumber'); // Подключаем plumber



// Задаем пути
var path = {
    dist: { //Тут мы укажем куда складывать готовые после dev сборки файлы
        html: 'dist/',
        libs: 'dist/libs',
        js: 'dist/js/',
        json: 'dist/json',
        style: 'dist/css/',
        img: 'dist/img/',
        svg: 'dist/svg/',
        fonts: 'dist/fonts/'
    },
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'build/',
        libs: 'build/libs',
        js: 'build/js/',
        json: 'build/json',
        style: 'build/css/',
        img: 'build/img/',
        svg: 'build/svg/',
        fonts: 'build/fonts/'
    },
    sources: { //Пути откуда брать исходники
        html: 'app/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        libs: 'app/libs/**/*',
        js: 'app/js/bundle.js',
        json: 'app/json/**/*.json',
        scss: 'app/sass/**/*.scss',
        style: 'app/css/**/*.css',
        img: 'app/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: 'app/fonts/**/*.*',
        svg: 'app/svg/**/*.svg'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        sass: 'app/sass/**/*.scss',
        html: 'app/*.html',
        includehtml: 'app/include/*html',
        svg: 'app/svg/**/*.svg',
        img: 'app/img/**/*',
        js: 'app/js/**/*.js'
    },
    clean: 'dist'
};

// разработка

//минифицаруем svg
gulp.task('svg-min', function () {
    return gulp.src(path.sources.svg)
        .pipe(svgmin())
        .pipe(gulp.dest(path.dist.svg))
        .pipe(browserSync.reload({stream: true})); // Обновляем js на странице при изменении
});



//минификация изображений и вынос в dist/img
gulp.task('img-min', function () {
    return gulp.src(path.sources.img) // Берем все изображения из app
        .pipe(imagemin({ // Сжимаем их с наилучшими настройками
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(path.dist.img)); // Выгружаем на продакшен
});



//преобразуем scss в css
gulp.task('sass', function () { // Создаем таск Sass
    return gulp.src("app/sass/bundle.scss") // Берем источник
        .pipe(plumber())
        .pipe(rigger())
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer({//прогоняем css через автопрефиксер
            browsers: ['last 7 versions'],
            cascade: false
        }))
        //.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest(path.dist.style)) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})); // Обновляем CSS на странице при изменении
});



gulp.task('fontmin', function() {
    return gulp.src(path.sources.fonts)
        .pipe(fontmin())
        .pipe(gulp.dest(path.dist.fonts))
        .pipe(browserSync.reload({stream: true})); // Обновляем js на странице при изменении
});



gulp.task('clean', function() {
    return del.sync('dist'); // Удаляем папку dist перед сборкой
});



//Билдим html, сжимаем и выгружаем в dist
gulp.task('html-dist', function () {
    return gulp.src(path.sources.html)
        .pipe(rigger()) // прогоним через rigger
        //.pipe(htmlmin({collapseWhitespace: true}))// Сожмем html
        .pipe(gulp.dest(path.dist.html))
        .pipe(browserSync.reload({stream: true})); // Обновляем html на странице при изменении
});



//перенос в dist
gulp.task('export-to-dist', function () {
    var
        buildJson = gulp.src(path.sources.json) // Переносим json в продакшен
            .pipe(gulp.dest(path.dist.json));
});



gulp.task('js-dist', function () {
    return gulp.src(path.sources.js) //Найдем наш main файл
        .pipe(rigger()) //Прогоним через rigger
        //.pipe(sourcemaps.init()) //Инициализируем sourcemap
        //.pipe(sourcemaps.write()) //Пропишем карты
        .pipe(gulp.dest(path.dist.js)) //Выплюнем готовый файл в build
        .pipe(browserSync.reload({stream: true})); // Обновляем js на странице при изменении
});



//преобразуем изображения в webp
gulp.task('webp', () =>
gulp.src(path.sources.img)
    .pipe(webp())
    .pipe(gulp.dest(path.build.img))
);



//настраиваем сервер
gulp.task('browser-sync', function () { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'dist' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});



//Следим за обновлением файлов
gulp.task('watch', ['clean', 'browser-sync', 'sass', 'html-dist', 'export-to-dist', 'svg-min', 'img-min', 'fontmin', 'js-dist'], function () {
    gulp.watch(path.watch.sass, ['sass'], browserSync.reload); // Наблюдение за sass файлами в папке sass
    gulp.watch(path.watch.html, ['html-dist'], browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch(path.watch.includehtml, ['html-dist'], browserSync.reload); // Наблюдение за HTML файлами в директории include
    gulp.watch(path.watch.svg, ['svg-min'], browserSync.reload); // Наблюдение за svg
    gulp.watch(path.watch.img, ['img-min'], browserSync.reload); // Наблюдение за изображениями
    gulp.watch(path.watch.js, ['js-dist'], browserSync.reload); // Наблюдение за JS файлами в папке js
});


// Таски для билда готового проекта

//минифицаруем svg
gulp.task('build-svg-min', function () {
    return gulp.src(path.sources.svg)
        .pipe(svgmin())
        .pipe(gulp.dest(path.build.svg))
});



//минификация изображений и вынос в dist/img
gulp.task('build-img-min', function () {
    return gulp.src(path.sources.img) // Берем все изображения из app
        .pipe(imagemin({ // Сжимаем их с наилучшими настройками
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(path.build.img)); // Выгружаем на продакшен
});



//преобразуем scss в css
gulp.task('build-sass', function () { // Создаем таск Sass
    return gulp.src("app/sass/bundle.scss") // Берем источник
        .pipe(plumber())
        .pipe(rigger())
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer({//прогоняем css через автопрефиксер
            browsers: ['last 7 versions'],
            cascade: false
        }))
        .pipe(cssnano()) // Сжимаем
        //.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest(path.build.style)) // Выгружаем результата в папку app/css
});



gulp.task('build-fontmin', function() {
    return gulp.src(path.sources.fonts)
        .pipe(fontmin())
        .pipe(gulp.dest(path.build.fonts))
});



gulp.task('build-clean', function() {
    return del.sync('build'); // Удаляем папку dist перед сборкой
});



//Билдим html, сжимаем и выгружаем в dist
gulp.task('html-build', function () {
    return gulp.src(path.sources.html)
        .pipe(rigger()) // прогоним через rigger
        .pipe(htmlmin({collapseWhitespace: true}))// Сожмем html
        .pipe(gulp.dest(path.build.html))
});



//перенос в dist
gulp.task('build-export-to-dist', function () {
    var
        buildJson = gulp.src(path.sources.json) // Переносим json в продакшен
            .pipe(gulp.dest(path.build.json));
});



gulp.task('js-build', function () {
    return gulp.src(path.sources.js) //Найдем наш main файл
        .pipe(rigger()) //Прогоним через rigger
        //.pipe(sourcemaps.init()) //Инициализируем sourcemap
        .pipe(uglify()) //Сожмем наш js
        // .pipe(sourcemaps.write()) //Пропишем карты
        .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
});

gulp.task('build', ['build-clean', 'build-sass', 'html-build', 'build-export-to-dist', 'build-svg-min', 'build-img-min', 'build-fontmin', 'js-build']);
