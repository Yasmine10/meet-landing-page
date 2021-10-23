const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

// to compile sass/scss to css
function sassTask() {
    return gulp.src("./app/scss/**/*.scss", { sourcemaps: true })
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(gulp.dest("./dist/css", { sourcemaps: '.' }))
        .pipe(browserSync.stream());
}

// to watch file changes and live reload with browserSync
function watchTask() {
    browserSync.init({
		server: {
			baseDir: './',
		}
	});
    gulp.watch("./app/scss/**/*.scss", sassTask);
    gulp.watch("./*.html").on('change', browserSync.reload);
}

exports.sassTask = sassTask;
exports.watchTask = watchTask;