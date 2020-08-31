const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackMessages = require('webpack-messages');

module.exports = {
  entry: ['./src/js/index.js', './src/css/index.css'],
  mode: 'production',
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  stats: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: [
          path.resolve(__dirname, 'src/fonts')
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets',
              publicPath: './'
            }
          }
        ]
      },
      {
        test: /\.(svg|png|jpg|jpeg)(\?v=\d+\.\d+\.\d+)?$/,
        include: [
          path.resolve(__dirname, 'src/images')
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets'
            }
          }
        ]
      },
      {
        test: /\.(svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: [
          path.resolve(__dirname, 'src/icons')
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              emitFile: false,
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {importLoaders: 1, minimize: true},
            },
            {
              loader: 'postcss-loader',
              options: {
                minimize: true,
                plugins: loader => [
                  require('postcss-partial-import'),
                  require('postcss-preset-env')({
                    stage: 0
                  }),
                  require('autoprefixer'),
                  require('postcss-nested'),
                  require('cssnano')({ preset: 'default' }),
                  require('iconfont-webpack-plugin')({
                    resolve: loader.resolve,
                    enforcedSvgHeight: 100,
                  })
                ]
              },
            },
          ],
        }),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('assets/theme.css.liquid'),
    new WebpackMessages({
      name: 'css & js',
      logger: str => console.log(`>> ${str}`)
    })
  ],
  output: {
    filename: 'assets/theme.js',
    path: path.resolve(__dirname)
  }
}
