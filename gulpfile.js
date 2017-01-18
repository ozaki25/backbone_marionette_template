'use strict';

let gulp = require('gulp');
let runSequence = require('run-sequence');
let browserify = require('browserify');
let source = require('vinyl-source-stream');
let webserver = require('gulp-webserver');
let babelify = require("babelify");
let eslint = require('gulp-eslint');
let ts = require("gulp-typescript");
let tsify = require("tsify");
let tslint = require("gulp-tslint");

gulp.task('build', () => {
    runSequence(['browserify']);
});

gulp.task('browserify', () => {
    browserify({
        basedir: '.',
        debug:   true,
        entries: ['ts/app.ts'],
        cache: {},
        packageCache: {}
    })
        .plugin(tsify, {
            // "noImplicitAny": true,
            // "suppressImplicitAnyIndexErrors": true
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
    gulp.watch('./ts/**/*.ts', ['build', 'tslint']);
});

gulp.task('server', () => {
    gulp.src('./')
        .pipe(webserver({
            host: '127.0.0.1',
            livereload: true
        })
    );
});

gulp.task('eslint', () => {
    gulp.src('./js/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task("tslint", () => {
    gulp.src('./ts/**/*.ts')
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report())
});

gulp.task('default', ['build', 'watch', 'server', 'tslint']);
