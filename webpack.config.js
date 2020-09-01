const path = require('path');

module.exports = {
  entry: {
    'annjs.min': './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: '@lijianqiang01/annjs',
    libraryTarget: "umd"
  },
  resolve: {
    mainFiles: ['index.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  performance: {
    hints: false,
  },
};
