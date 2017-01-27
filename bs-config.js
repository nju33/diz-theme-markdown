module.exports = {
  ui: false,
  files: ['local/**/*'],
  server: {
    baseDir: 'local/blog/',
    index: 'index.html'
  },
  port: 33333,
  ghostMode: false,
  open: false,
  notify: false,
  injectChanges: true
};
