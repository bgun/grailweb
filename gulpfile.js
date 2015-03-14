var gulp = require('gulp');
var babel      = require('gulp-babel');
var browserify = require('gulp-browserify');
var concat     = require('gulp-concat');
var server     = require('gulp-express');
var watch      = require('gulp-watch');

// Browserify and livereload refresh
gulp.task('browserify', ['babel'], function() {

  gulp.src('build/js/client.js')
    .pipe(browserify())
    .pipe(concat('client-bundle.js'))
    .pipe(gulp.dest('public/js'))
    .pipe(server.notify())

});

gulp.task('babel', function() {

  gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('build/js/'))
    .on('end', function() {
      server.run(['build/js/server.js']);
    });

});

// Main build task and server running
gulp.task('build', function() {

  gulp.watch('src/**/*.js', ['babel','browserify']);

});

gulp.task('default', ['build','babel','browserify']);