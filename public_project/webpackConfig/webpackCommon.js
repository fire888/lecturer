const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
	entry: './public_project/src/index.js',
	module: {
		rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      { 
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
			{
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'imgs/'
          }
        }]
      },			
      { test: /\.(obj|glb)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'obj/'
          }
        }]
      },
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
      template: './public_project/src/index.html',
      inject: 'head',
    }),
		new webpack.ProvidePlugin({
			AFRAME: 'aframe'
		})
	]
};