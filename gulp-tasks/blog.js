import path from 'path';
import Diz from 'diz';
// import Minimalist from '../lib/minimalist-renderer';


export default {
  name: 'blog',
  stream(gulp, config) {
    Diz.load({base: './src/blogs/'}).then(roots => {
      const renderer = new Diz({roots});
      renderer.render()
        .pipe(gulp.dest('./local/'));
      renderer.bundle().then(stream => {
        stream.pipe(gulp.dest('./local/'));
      })
    });
  }
}

function handleBundler(gulp, err, stream) {
  if (err) {
    console.log(err);
    return;
  }
  stream.pipe(gulp.dest('local/'));
}
