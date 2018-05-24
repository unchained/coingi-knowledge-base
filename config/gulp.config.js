const projectConfig = require('./config');

module.exports = {
  app: {
    nodemon: {
      script: 'app.js',
      // nodeArgs: ['--inspect'],
      ext: 'js json',
      ignore: ['public/**/*.js', 'app/views/**/*.js', 'config/**/*.config.js', 'gulpfile.js', 'node_modules/'],
      env: {
        NODE_ENV: 'development',
      },
    },
    browserSync: {
      proxy: `http://localhost:${projectConfig.port}`,
      port: projectConfig.port + 1000,
      notify: true,
    },
  },
  copyFiles: [
    'src/img/**/*.*',
    'src/fonts/**/*.*',
    'src/img/favicon/**/*.*'
  ],
  html: {
    src: 'app/views',
    ext: `.${projectConfig.viewEngine}`,
  },
  js: {
    /**
     * src is the entry point for webpack
     */
    src: 'src/js/client.js',
    dist: 'dist/js/',
  },
  styles: {
    path: {
      scss: 'src/scss/',
      css: 'dist/css/',
    },
    autoprefixerCompatibility: ['last 3 versions', '> 1%'],
    sassOptions: {
      outputStyle: 'compressed',
      /**
       * Paths to the scss packages from node_modules go below.
       */
      includePaths: [
        'node_modules/bootstrap',
      ],
    },
  },
};
