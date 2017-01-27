import plumber from 'gulp-plumber'
import babel from 'gulp-babel';
import multiDest from '@nju33/gulp-multi-dest';

export default {
  name: 'script',
  stream(gulp, config) {
    return gulp.src(config[this.name][0])
    .pipe(plumber())
    .pipe(babel())
    // .pipe(multiDest(gulp.dest, config[this.name][1])());
    .pipe(gulp.dest(config[this.name][1]));
  }
}
