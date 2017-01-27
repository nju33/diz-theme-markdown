export default {
  name: 'favicon',
  stream(gulp, config) {
    return gulp.task(config[this.name][0])
      .pipe(gulp.dest(config[this.name][1]));
  }
};
