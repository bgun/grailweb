var gulp = require('gulp');
var babel      = require('gulp-babel');
var browserify = require('gulp-browserify');
var concat     = require('gulp-concat');
var server     = require('gulp-express');

gulp.task('build', function() {

  gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('build/js/'))

  gulp.src('build/js/client.js')
    .pipe(browserify())
    .pipe(concat('client-bundle.js'))
    .pipe(gulp.dest('public/js'))

  setTimeout(function() {
    server.run(['build/js/server.js']);
  }, 1000);

});

gulp.task('default', function() {
});
