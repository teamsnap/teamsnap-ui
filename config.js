'use strict';

module.exports = {
  css : {
    teamsnap : {
      src : 'src/css/teamsnap-ui.scss',
      dest : 'dist/css'
    },
    themes : {
      src : 'src/css/themes/*.scss',
      dest : 'dist/css/themes'
    }
  },
  fonts : {
    src : 'src/assets/fonts/**/*',
    dest : 'dist/assets/fonts'
  },
  watch : {
    teamsnap : [
      'src/css/**/*.scss',
      '!src/css/themes/*.scss',
    ],
    scss : 'src/css/**/*.scss'
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
