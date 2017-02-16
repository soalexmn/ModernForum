/// <binding BeforeBuild='compile-css, compile-main-less' ProjectOpened='watch' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename')


//gulp.task('less-watch', function () {
//    watch()
//});



//gulp.task('project-start', function () {
//    // place code for your default task here
//});

gulp.task('compile-main-less', function () {
    gulp.src('ClientApp/less/main.less')
        .pipe(less().on('error', function (err) { console.log(err); }))
        .pipe(gulp.dest('wwwroot/css/'))
        .pipe(cssmin().on('error', function (err) { console.log(err); }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('wwwroot/css/'));
});

gulp.task('compile-css', function () {
    gulp.src('ClientApp/css/*.css')
        .pipe(gulp.dest('wwwroot/css/'))
        .pipe(cssmin().on('error', function (err) { console.log(err); }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('wwwroot/css/'));
});

gulp.task('watch', function () {
    gulp.watch('ClientApp/less/*.less', ['compile-main-less']);
    gulp.watch('ClientApp/css/*.css', ['compile-css']);
});