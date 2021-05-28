'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const env = require('gulp-util').env;
const gulpif = require('gulp-if');
const config = require('./config');
const cleanCSS = require('gulp-clean-css');

// Create a function for all CSS tasks so
// teamsnap-ui and themes can build independently
function buildCSS(config) {
  return gulp.src(config.src)
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(cleanCSS({level: 2}))
    .pipe(gulp.dest(config.dest))
}

// Build teamsnap-ui CSS
gulp.task('css-teamsnap', (done) => {
  buildCSS(config.css.teamsnap);
  done();
});

// Build themes
gulp.task('css-themes', (done) => {
  buildCSS(config.css.themes);
  done();
});

// Copy fonts
gulp.task('fonts', () => {
  return gulp.src(config.fonts.src)
    .pipe(gulp.dest(config.fonts.dest))
});

// Start browsersync
gulp.task('serve', () => {
  browserSync.init(config.serve.options)
});

// Delete the dist directory and all its contents
gulp.task('clean', (done) => {
  del.sync('dist');
  done();
})

// Watch for SCSS changes, then build CSS and update browser
// Add --themes flag to also build theme CSS
gulp.task('watch', () => {
  if (env.themes) {
    gulp.watch(config.watch.scss, gulp.series('css-teamsnap', 'css-themes'));
  } else {
    gulp.watch(config.watch.teamsnap, gulp.series('css-teamsnap'));
  }
});

// Register frontend composite task
gulp.task('build', gulp.series('clean', 'fonts', 'css-teamsnap', 'css-themes'));

// Register default task
// Add --dev flag for local dev (watches local files)
gulp.task('default', gulp.series('build', 'serve', 'watch'));
