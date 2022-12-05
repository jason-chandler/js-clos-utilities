const path = require('path');
const fs = require('fs');

module.exports = {
  mode: 'none',
  target: 'node',
  entry: './.valtan-cache/js-clos-utilities.js',
  output: {
    filename: 'js-clos-utilities.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    modules: [
      'node_modules',
      fs.readFileSync('.valtan-path', 'utf-8')
    ]
  }
};
