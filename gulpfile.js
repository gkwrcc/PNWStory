var gulp = require('gulp');
var express = require('express');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var gzip = require('gulp-gzip');
var livereload = require('gulp-livereload');
var rjs = require('requirejs');

// Set up a static server
var serverport = 8000;
var server = express();
server.use(express.static('.'));

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

// Compiles javascripts
gulp.task('build-javascripts', function() {
    rjs.optimize({
    baseUrl: "javascripts",
    mainConfigFile: 'javascripts/main.js',
    name: "main",
    paths: {
        bootstrap: "empty:",
        videojs: "empty:"
    },
    out: "main-built.js"
    });
});

// Watch files for changes
gulp.task('watch', function() {
    server.listen(serverport);
    livereload.listen();
    gulp.watch('./stylesheets/*', ['build-sass']);
    gulp.watch('./*.html').on('change', livereload.changed);
    gulp.watch('./javascripts/**/*.js').on('change', livereload.changed);
//gulp.watch('./javascripts/**/*.js', ['build-javascripts']);
//gulp.watch('./main-built.js').on('change', livereload.changed);
});

gulp.task('default', ['build-sass', 'build-javascripts', 'watch']);

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

