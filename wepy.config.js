const path = require('path');
var prod = process.env.NODE_ENV === 'production';

module.exports = {
  wpyExt: '.wpy',
  eslint: false,
  cliLogs: !prod,
  build: {},
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      '~': path.join(__dirname, '/')
    },
    aliasFields: ['wepy'],
    modules: ['node_modules']
  },
  compilers: {
    less: {
      compress: prod
    },
    /*sass: {
      outputStyle: 'compressed'
    },*/
    babel: {
      sourceMap: true,
      presets: [
        'env'
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread',
        'transform-export-extensions'
      ]
    }
  },
  plugins: {
    replace: {
      filter: /\.wxss$/,
      config: {
        find: /\b(\d+(\.\d+)?)px\b/ig,
        replace: function(matchs, word) {
          return word.trim() + 'rpx';
        }
      }
    }
  },
  appConfig: {
    noPromiseAPI: ['createSelectorQuery'],
    baseUrl: process.env.NODE_ENV === 'production'
      ? 'http://47.96.7.128:8888'
      // : 'https://api.werwee.com'
      : 'http://47.96.7.128:8888'
  }
};

if (prod) {
  
  // 压缩sass
  // module.exports.compilers['sass'] = {outputStyle: 'compressed'}
  
  // 压缩js
  module.exports.plugins = {
    replace: {
      filter: /\.wxss$/,
      config: {
        find: /\b(\d+(\.\d+)?)px\b/ig,
        replace: function(matchs, word) {
          return word.trim() + 'rpx';
        }
      }
    },
    uglifyjs: {
      filter: /\.js$/,
      config: {}
    },
    imagemin: {
      filter: /\.(jpg|png|jpeg)$/,
      config: {
        jpg: {
          quality: 80
        },
        png: {
          quality: 80
        }
      }
    }
  };
}
