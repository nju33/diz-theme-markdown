import gulp from 'gulp';
import browserSync from 'browser-sync';
import blog from './gulp-tasks/blog';
import style from './gulp-tasks/style';
import script from './gulp-tasks/script';
import jsx from './gulp-tasks/jsx';
import image from './gulp-tasks/image';
import favicon from './gulp-tasks/favicon';
import bsConfig from './bs-config';
import pkg from './package';

const bs = browserSync.create(pkg.name);

const conf = {
  blog: [
    'src/blogs/',
    'docs/',
    'src/blogs/**/*'
  ],
  style: [
    'src/styles/index.less',
    ['.', 'local/blog/diz-theme-markdown/styles/'],
    'src/styles/**/*.less'
  ],
  script: [
    'lib/**/*.js',
    'dist/',
    'lib/**/*.js'
  ],
  jsx: [
    'theme/**/*.jsx',
    'dist/',
    'theme/**/*.jsx'
  ],
  image: ['assets/images/**/*', 'local/blog/images/'],
  favicon: ['assets/favicons/*', 'local/blog/']
};

const tasks = {
  blog,
  style,
  script,
  jsx,
  image,
  favicon
};

Object.keys(conf).forEach(key => {
  const task = tasks[key];
  gulp.task(task.name, task.stream.bind(task, gulp, conf));

  const preTasks = Object.keys(conf).filter(key => Boolean(conf[key][2]));
  gulp.task('watch', preTasks, () => {
    bs.init(bsConfig);
    preTasks.forEach(taskname => {
      if (conf[taskname][3]) {
        gulp.watch(conf[taskname][2], conf[taskname][3]);
      } else {
        gulp.watch(conf[taskname][2], [taskname]);
      }
    });
  });
});
