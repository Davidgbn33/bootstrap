const { src, dest, series, watch } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const clean = require('gulp-clean');

function process_JS() {
  return src('src/js/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))

    .pipe(dest('public/js/'));
}
function process_HTML() {
  return src('src/*.html').pipe(dest('public/'));
}
function process_CSS() {
  return src('src/scss/styles.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(dest('public/css/'))
    .pipe(browserSync.stream());
}
function build(cb) {
  // place code for your default task here
  cb();
}

function watchFiles() {
  browserSync.init({
    server: './public',
  });
  watch('src/js/*.js', series(clean_JS, process_JS)).on(
    'change',
    browserSync.reload
  );
  watch('src/scss/*.scss', series(clean_CSS, process_CSS)).on(
    'change',
    browserSync.reload
  );
  watch('src/*.html', series(clean_HTML, process_HTML)).on(
    'change',
    browserSync.reload
  );
}
function clean_All() {
  return src('public/*').pipe(clean());
}
function clean_JS() {
  return src('public/js/*').pipe(clean());
}
function clean_CSS() {
  return src('public/css/*').pipe(clean());
}
function clean_HTML() {
  return src('public/*.html').pipe(clean());
}

exports.build = build;
exports.default = series(
  clean_All,
  process_JS,
  process_HTML,
  process_CSS,
  build
);
exports.watch = watchFiles;
