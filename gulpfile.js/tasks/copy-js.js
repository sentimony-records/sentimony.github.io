var gulp = require('gulp');

gulp.task('copy:js', function () {
  return gulp.src([
      './_js/base.js',
      './_js/modules/*'
    ])
    .pipe(gulp.dest('.tmp/'));
});

gulp.task('copy:sw-toolbox', function () {
  return gulp.src([
      'node_modules/sw-toolbox/sw-toolbox.js',
    ])
    .pipe(gulp.dest(''));
});

gulp.task('copy:js-lib', ['copy:js', 'copy:sw-toolbox', 'copy:vue'], function () {
  return gulp.src([
      'node_modules/vue/dist/vue.min.js',
      'node_modules/vue-nav-tabs/dist/vue-tabs.js',
      'node_modules/swiper/dist/js/swiper.min.js',
      // 'node_modules/goodshare.js/goodshare.min.js',
      'node_modules/lazysizes/lazysizes.min.js',
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/firebase/firebase.js'
    ])
    .pipe(gulp.dest('.tmp/'));
});
