import imageResize from 'gulp-image-resize';
import assetCache from 'gulp-asset-cache';
import imagemin from 'gulp-imagemin';
import pngquant from 'imagemin-pngquant';

export default {
  name: 'image',
  stream(gulp, config) {
    return gulp.src(config[this.name][0])
      .pipe(assetCache.filter('./assets/images/.cache'))
      .pipe(imageResize({
        width: 660
      }))
      // .pipe(lwip.rescale(660))
      .pipe(imagemin({
        use: [pngquant()]
      }))
      .pipe(gulp.dest(config[this.name][1]))
      .pipe(assetCache.cache())
  }
}
