var
  gulp = require('gulp'),
  $ = require('gulp-load-plugins')(),
  bs = require('browser-sync'); // Автоперезагрузка браузера

module.exports = function(options) {
  return function() {

    return gulp.src(options.src)
      .pipe($.newer(options.dist))
      .pipe($.if(options.prod, $.svgmin({
        plugins: [{
          mergePaths: false
        }]
      })))
      .pipe(gulp.dest(options.dist))
      .pipe(bs.stream());
  }
};
