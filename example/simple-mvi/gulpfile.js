var gulp = require('gulp');
var del = require('del');
var $ = require('gulp-load-plugins')();
var webpack = require('webpack');
var config = require('./webpack.config');

gulp.task(
  'compile',
  [
    'clean',
    'compile-es6',
  ]
);

gulp.task(
  'clean',
  function () {
    del('./dist/**/*')
  }
);

gulp.task(
  'compile-es6',
  function () {
    gulp.src('src/**/*.js')
      .pipe($.plumber())
      .pipe($.webpack(config))
      .pipe(gulp.dest('dist'));
  }
);

gulp.task(
  'watch',
  function () {
    gulp.watch('src/**/*', ['compile']);
  }
);

gulp.task('default', ['watch'])
