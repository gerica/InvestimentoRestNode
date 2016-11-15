const gulp = require('gulp');
const clean = require('gulp-clean');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
// Gulp dependencies go here

gulp.task('default', function() {
    // Run ESLint
    gulp.src(["public/app/**/*.js"])
        .pipe(eslint())
        .pipe(eslint.format());
    // browser source
    gulp.src("public/app/**/*.js")
        .pipe(babel())
        .pipe(clean({ force: true }))
        .pipe(gulp.dest("dist"));
});
