const CollectionPageGenerator = require('diz-plugin-collection-page-generator');
const AtomFeed = require('diz-plugin-atom-feed');
const magu = require('magu');
const Renderer = require('../../..');

module.exports = {
  id: 'urn:uuid:484f1a77-cf57-4be0-bb94-b0bb832140ca',
  title: 'Markdown',
  description: 'Markdown is Diz theme',
  url: 'https://nju33.github.io/diz-theme-markdown/',
  author: 'nju33',
  theme: {
    Renderer,
    config: {
      base: '/diz-theme-markdown',
      inlineCSS: false,
      stylesheetPath: (() => {
        if (process.env.NODE_ENV === 'local') {
          return '/styles/markdown.css';
        }
        return '/diz-theme-markdown/styles/markdown.css';
      })()
    }
  },
  compile(contents) {
    return new Promise((resolve, reject) => {
      magu().process(contents)
      .then(result => {
        resolve(result.html);
      })
      .catch(err => {
        reject(err);
      });
    });
  },
  plugins: [
    new CollectionPageGenerator({pager: 30}),
    new AtomFeed()
  ]
};
