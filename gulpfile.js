
var source = './app/src';
var prod = './app/prod';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var cleanCSS = require('gulp-clean-css');

gulp.task('style', function() {
  return gulp.src(source + '/sass/style.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(cleanCSS())
  .pipe(gulp.dest(prod + '/css/'))
});

gulp.task('image', function () {
  return gulp.src(source + '/images/*.{png,jpg,jpeg,gif,svg}')
  .pipe(imagemin())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest(prod + '/images'))
});

gulp.task('script', function() {
  return gulp.src(source + '/scripts/*.js')
  .pipe(concat('script.min.js'))
  .pipe(uglify().on('error', function(e){
    console.log(e);
  }))
  .pipe(gulp.dest(prod + '/scripts/'))
});

gulp.task('default', function () {
  gulp.watch(source + '/sass/*.scss', ['style']);
  gulp.watch(source + '/scripts/*.js', ['script']);
});
