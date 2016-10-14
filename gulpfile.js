"use strict";
const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const rename = require('gulp-rename');


gulp.task('sass', () => {
    return gulp.src("scss/lx.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest("dist/css"))
        .pipe(gulp.dest("docs/css"))
});

gulp.task('js', () => {
    return gulp.src('js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('dist/js'))
        .pipe(gulp.dest('docs/js'))
});

gulp.task('default', ['sass', 'js']);
