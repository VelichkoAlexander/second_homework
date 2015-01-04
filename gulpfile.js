'use strict';
var gulp = require('gulp'),
    rename = require("gulp-rename"),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    notify=require('gulp-notify'),
    livereload=require('gulp-livereload'),
    connect = require('gulp-connect');

//local server config
gulp.task('connect', function() {
    connect.server({
        root: ['built'],
        livereload: true
    });
});

gulp.task('css', function() {
    gulp.src('src/assets/styles/main.css')
        .pipe(rename('style.css'))
        .pipe(gulp.dest('built/css/'))
        .pipe(notify("Css ready!"))
        .pipe(connect.reload());
});

//html
gulp.task('html', function(){
    gulp.src('built/index.html')
        .pipe(connect.reload());
});

//watcher
gulp.task('watch', function(){
    gulp.watch('src/assets/styles/main.css',['css']);
    gulp.watch('built/index.html',['html']);
});

gulp.task('images', function() {
    return gulp.src('src/assets/images/**/*')
        .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
        .pipe(gulp.dest('built/img/'));
});

//default
gulp.task('default', ['connect', 'html', 'css', 'watch']);

