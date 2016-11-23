const gulp = require('gulp');
const clean = require('gulp-clean');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
// Gulp dependencies go here

gulp.task('clean', function(){
	return gulp.src('dist/')
			.pipe(clean());
});
gulp.task('eslint', function(){
	return gulp.src(["public/app/**/*.js"])
        //.pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('default',['eslint'], function() {
    // browser source
    return gulp.src(["public/app/**/*.js", "public/app/**/*.json"])
        .pipe(gulp.dest("dist"));
});
