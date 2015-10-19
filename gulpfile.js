var path = require('path');
var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('gulp-webpack');
var uglify = require('gulp-uglify');
var react = require('gulp-react');

var pkg = require('./package.json');

// building error handler
function onError(err){
  console.log(err);
  this.emit('end');
}

// Sass task
gulp.task('css', function () {
  return gulp.src('scss/*.+(scss|sass)')
    .pipe(sass().on('error', onError))
    // .pipe(code.lint())       //css lint
    // .pipe(code.minify())     //css minify
    .pipe(gulp.dest('build/css'))
});

// React JSX compile task
gulp.task('js', function () {
  return gulp.src('js/**/*.js')
    // .pipe(code.lint())  //js lint
    .pipe(react())      // complie React JSX template
    .on('error', onError)
    .pipe(gulp.dest('build/'));
});

// Webpack compile task
gulp.task('pack', ['js', 'css'], function(){
  return gulp.src('build/index.js')
    .pipe(webpack({
      output: {
        filename: 'main.js',
        libraryTarget: 'umd'
      }
    }))
    .on('error', onError)
    // .pipe(uglify())
    .on('error', onError)
    .pipe(gulp.dest('build/'));
})

// Watch task
gulp.task('watch', function(){
  gulp.watch(['js/**/*.js', 'sass/**/*.+(scss|sass)'], ['pack']);
});

// Default task
gulp.task('default', ['pack', 'watch']);