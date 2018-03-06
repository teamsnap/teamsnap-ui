'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const config = require('./config');
const del = require('del');
const env = require('gulp-util').env;
const gulpif = require('gulp-if');

// Create a function for all CSS tasks so
// teamsnap-ui and themes can build independently
function buildCSS(config) {
  return gulp.src(config.src)
  .pipe(sass())
  .pipe(autoprefixer('last 2 versions'))
  .pipe(cssnano())
  .pipe(gulp.dest(config.dest))
}

// Build teamsnap-ui CSS
gulp.task('css-teamsnap', () => {
  buildCSS(config.css.teamsnap);
});

// Build themes
gulp.task('css-themes', () => {
  buildCSS(config.css.themes);
});

// Copy fonts
gulp.task('fonts',  () => {
  return gulp.src(config.fonts.src)
    .pipe(gulp.dest(config.fonts.dest))
});

// Start browsersync
gulp.task('serve',  () =>  {
  browserSync.init(config.serve.options)
});

// Delete the dist directory and all its contents
gulp.task('clean', () => {
  return del.sync('dist');
})

// Watch for SCSS changes, then build CSS and update browser
// Add --themes flag to also build theme CSS
gulp.task('watch', () => {
  if (env.themes) {
    gulp.watch(config.watch.scss, ['css-teamsnap', 'css-themes']);
  } else {
    gulp.watch(config.watch.teamsnap, ['css-teamsnap']);
  }
});

// Register frontend composite task
gulp.task('build', ['clean'], done => {
  gulp.start('fonts'),
  gulp.start('css-teamsnap'),
  gulp.start('css-themes')
  done()
});

// Register default task
// Add --dev flag for local dev (watches local files)
gulp.task('default', ['build'], done => {
  gulp.start('serve');
  gulp.start('watch');
  done();
});
