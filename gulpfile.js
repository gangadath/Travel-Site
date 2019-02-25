var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');


gulp.task('default',function() {
  console.log("Hooray - You have created a gulp task")
});

gulp.task('html', function() {
  console.log("Something useful being done to HTML here.")
});

gulp.task('style', function() {
  return gulp.src('./app/assets/style/style.css')
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/style'));
});

gulp.task('watch', function() {

  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/style/**/*.css', function() {
    gulp.start('style');
  });

});
