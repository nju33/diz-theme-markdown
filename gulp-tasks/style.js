import plumber from 'gulp-plumber';
import less from 'gulp-less';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import flexbugsFixes from 'postcss-flexbugs-fixes';
import yuGothic from 'postcss-yu-gothic';
import fontMagician from 'postcss-font-magician';
import willChange from 'postcss-will-change';
import focus from 'postcss-focus';
import easings from 'postcss-easings';
import assets from 'postcss-assets';
import resembleImage from 'postcss-resemble-image';
import sprites from 'postcss-sprites';
import svg from 'postcss-svg';
import colorblind from 'postcss-colorblind';
import mqpacker from 'css-mqpacker';
import cssnano from 'cssnano';
import _ from 'lodash';
import gulpif from 'gulp-if';
import rename from 'gulp-rename';
import multiDest from '@nju33/gulp-multi-dest';
import {isProduction, isDebug} from './helpers';

const plugins = [
  assets({loadPaths: ['images/']}),
  resembleImage(),
  null,
  null,
  fontMagician({
    formats: 'woff2 woff',
    variants: {
      'Source Sans Pro': {
        300: [],
        400: []
      }
    }
  }),
  flexbugsFixes,
  yuGothic,
  easings,
  willChange,
  focus,
  autoprefixer({browsers: ['last 2 versions', '> 3%']}),
];

if (isDebug()) {
  plugins.concat([
    colorblind({method: 'achromatopsia'})
  ]);
} else if (isProduction()) {
  plugins.concat([
    mqpacker,
    cssnano
  ]);
}

export default {
  name: 'style',
  stream(gulp, config) {
    plugins.splice(2, 1, sprites({
      stylesheetPath: './' + config[this.name][1],
      spritePath: './' + config[this.name] + '/images'
    }));
    plugins.splice(3, 1, svg({
      paths: ['./' + config[this.name][1]],
    }));

    gulp.src(config[this.name][0])
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss(plugins))
    .pipe(rename({basename: 'markdown'}))
    .pipe(multiDest(gulp.dest, config[this.name][1])());
  }
}
