require('./server.babel');

const path = require('path');
const rootDir = path.resolve(__dirname, '..');

const WebpackIsomorphicTools = require('webpack-isomorphic-tools');

process.env.IS_SERVER = 1; // eslint-disable-line

global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('../build-scripts/webpack-isomorphic-tools')).
  server(rootDir, () => {
    require('../src/ssr/server');
  });
