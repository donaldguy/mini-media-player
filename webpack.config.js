const path = require('path');

module.exports = {
  entry: './src/main.js',
  mode: 'production',
  experiments: {
    outputModule: true,
  },
  output: {
    filename: 'dist/mini-media-player-bundle.js',
    path: path.resolve(__dirname),
    chunkFormat: 'module',
    chunkLoading: 'import',
    enabledLibraryTypes: ['module'],
  },
  optimization: {
    moduleIds: 'natural'
  },
};
