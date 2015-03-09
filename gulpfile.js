var gulp = require('gulp'),
    watch = require('gulp-watch'),
    shell = require('gulp-shell'),
    serve = require('gulp-serve');


gulp.task('metalsmith-build', shell.task([
  'node build.js'
]))

gulp.task('serve', serve({
  root: 'build',
  port: 8080
}));

gulp.task('watch', function () {
  // watch less and html
  gulp.watch(['src/public/scss/**/*.scss', 'templates/**/*.html'], ['metalsmith-build'])
});

gulp.task('default', ['watch', 'serve'])
