const gulp 			= require('gulp');
const browserify 	= require('browserify');
const source 		= require('vinyl-source-stream');
const buffer		= require('vinyl-buffer');
const babel 		= require('babelify');
const util			= require('gulp-util');

// This task bundles our scripts using browserify, and then minifies it.
gulp.task('scripts', ()=> {
	return browserify('./index.js')
		.transform(babel, {presets: ["es2015"]}) 
		.bundle()
		.pipe(source('mendeleev.js'))
		.pipe(buffer())
		.pipe(gulp.dest('./'));
});

// This is the task we will run while developing our application.
// It will enable continuous development.
gulp.task('package', ['scripts']);

