var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('styles', function () {
  return gulp.src('src/scss/main.scss') // Get source files with gulp.src
    .pipe(sass()) // Sends it through a gulp plugin
    .pipe(gulp.dest('assets/css')) // Outputs the file in the destination folder
})