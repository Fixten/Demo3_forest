var gulp = require ('gulp'),
  concat = require('gulp-concat');
    less = require('gulp-less');
   debug = require('gulp-debug');
   paths = {
     less: ['components/global/*.less'],
     blocks: ['components/blocks/*.less'],
     styles: ['styles/styles.less']
   };

  gulp.task('js', function() {
    return gulp.src('components/blocks/*.js')
      .pipe(concat('scripts.js', {newLine: '\n'}))
      .pipe(gulp.dest('scripts'))
      .pipe(debug());
  });

  gulp.task('build', function() {
    return gulp.src(['components/global/*.less', 'components/blocks/*.less'])
      .pipe(concat('styles.less', {newLine: '\n'}))
      .pipe(gulp.dest('styles'))
      .pipe(debug());
  });

  gulp.task('less', function () {
  return gulp.src('styles/styles.less')
    .pipe(less())
    .pipe(gulp.dest('styles'))
    .pipe(debug());
});

  gulp.task('watch', function() {
    gulp.watch(paths.less, ['build']);
    gulp.watch(paths.blocks, ['build']);
    gulp.watch(paths.styles, ['less']);
});

gulp.task('default', ['build', 'less', 'watch']);
