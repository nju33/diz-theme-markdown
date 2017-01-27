import fs from 'fs';
import svgmin from 'gulp-svgmin';
import svgSymbols from 'gulp-svg-symbols';
import gulpif from 'gulp-if';
import tap from 'gulp-tap';
import tmp from 'tmp';
import exitHook from 'exit-hook';

tmp.setGracefulCleanup();
const tmpfile = tmp.fileSync({postfix: '.svg'});
exitHook(tmpfile.removeCallback);

export default {
  name: 'symbol',
  filePath: null,
  stream(gulp, config) {
    gulp.src('src/symbols/**/*.svg')
      .pipe(svgmin())
      .pipe(svgSymbols({
        svgClassname: 'symbols',
        templates: ['default-svg']
      }))
      .pipe(tap(file => {
        this.filePath = tmpfile.name;
        fs.writeFileSync(tmpfile.name, file.contents.toString());
      }));
  }
}
