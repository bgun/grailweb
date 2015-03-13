var gulp = require('gulp');
var babel      = require('gulp-babel');
var browserify = require('gulp-browserify');
var concat     = require('gulp-concat');

gulp.task('build', function() {

  gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('build/js/'))

  gulp.src('build/js/client.js')
    .pipe(browserify())
    .pipe(concat('client-bundle.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('default', function() {
});
