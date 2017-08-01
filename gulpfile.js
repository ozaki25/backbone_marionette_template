'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const webserver = require('gulp-webserver');
const eslint = require('gulp-eslint');
const streamify = require('gulp-streamify');
const uglify = require('gulp-uglify');
const util = require('gulp-util');

gulp.task('build', () => {
    runSequence(['browserify', 'html', 'css', 'fonts']);
});

gulp.task('browserify', () => {
    browserify('./js/app.js', {
        debug:   true,
        require: ['moment'],
        transform: ['jstify'],
    })
    .bundle()
    .on('error',function(e) {
        util.log(e);
        this.emit('end');
    })
    .pipe(source('bundle.js'))
    .on('error', util.log)
    .pipe(streamify(uglify()))
    .on('error', util.log)
    .pipe(gulp.dest('./dist/js/'))
    .on('error', util.log);
});

gulp.task('html', () => {
    gulp.src('html/index.html')
        .pipe(gulp.dest('./dist/'));
});

gulp.task('css', () => {
    gulp.src('./css/**')
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('fonts', () => {
    gulp.src('./fonts/**')
        .pipe(gulp.dest('./dist/fonts/'));
});

gulp.task('watch', () => {
    gulp.watch(['./js/**/*.js', './css/**/*.css', './html/**/*.html'], ['build', 'lint']);
});

gulp.task('server', () => {
    gulp.src('./')
        .pipe(webserver({
            host: '127.0.0.1',
            livereload: true
        })
    );
});

gulp.task('lint', () => {
    gulp.src('./js/**/*.js')
        .pipe(eslint({ fix: true }))
        .pipe(eslint.format());
});

gulp.task('default', ['build', 'watch', 'server', 'lint']);
