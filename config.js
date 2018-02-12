'use strict';

module.exports = {
  css : {
    teamsnap : {
      src : 'src/teamsnap-ui.scss',
      dest : 'dist/css'
    },
    themes : {
      src : 'src/themes/*.scss',
      dest : 'dist/css/themes'
    }
  },
  fonts : {
    src : 'src/assets/fonts/**/*',
    dest : 'dist/assets/fonts'
  },
  watch : {
    teamsnap : [
      'src/**/*.scss',
      '!src/themes/*.scss',
    ],
    scss : 'src/**/*.scss'
  },
  serve : {
    options : {
      open: false,
      notify: false,
      files: './dist/**/*',
      server: {
        baseDir: 'dist'
      }
    }
  }
};
