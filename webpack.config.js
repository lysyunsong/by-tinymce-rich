var path = require('path')
var webpack = require('webpack')
const NODE_ENV = process.env.NODE_ENV
function resolve(dir) {
  return path.join(__dirname, '..', dir);
}
module.exports = {
  entry: NODE_ENV == "development" ? './src/main.js' : "./index.js",
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'by-tinymce-rich.js',
    library: 'by-tinymce-rich',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {}
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@':resolve('src')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  }
}

if (process.env.NODE_ENV === 'production') {
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
} else {
  module.exports.devtool = '#eval-source-map'
}
