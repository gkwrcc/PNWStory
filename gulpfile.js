var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var gzip = require('gulp-gzip');
var livereload = require('gulp-livereload');

var CSSDIR = "./stylesheets/";

// Compiles sass to css
gulp.task('build-sass', function() {
    return gulp.src('./stylesheets/main.scss')
        .pipe(sass())
        .pipe(gulp.dest(CSSDIR))
        .pipe(minifycss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(CSSDIR))
        .pipe(livereload());
});

// Watch files for changes
gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('./stylesheets/*', ['build-sass']);
    gulp.watch('./*.html').on('change', livereload.changed);
});

gulp.task('default', ['build-sass', 'watch']);

// To auto-reload gulp on changes to gulpfile.js
var spawn = require('child_process').spawn;
gulp.task('auto-reload', function() {
	var process;

	function restart() {
		if (process) {
			process.kill();
		}

		process = spawn('gulp', ['default'], {stdio: 'inherit'});
	}

	gulp.watch('gulpfile.js', restart);
	restart();
});

