var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jshint = require('gulp-jshint'),
    browserSync = require('browser-sync').create();

gulp.task('styles', function () {
  return gulp.src('src/scss/**/*.scss') // Get source files with gulp.src **/*.scss
    .pipe(sass()) // Sends it through a gulp plugin
    .pipe(gulp.dest('assets/css')) // Outputs the file in the destination folder
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('jshint', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});


gulp.task('watch', ['browserSync', 'styles'], function(){
  gulp.watch('src/scss/**/*.scss', ['styles']); 
  gulp.watch('*.html', browserSync.reload); 
  gulp.watch('assets/js/**/*.js', browserSync.reload); 
})

gulp.task('browserSync', function() {
  browserSync.init({
    port: 8082
  })
})