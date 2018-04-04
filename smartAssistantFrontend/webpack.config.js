var path = require('path');

var config = {
   entry: './src/index.js',
   output: {
      path: path.join(__dirname,'public'),
      filename: 'bundle.js'
   },
   devServer: {
      inline: true,
      port: 8181,
      contentBase: "./public"
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
	        query: {
               presets: ['env', 'react']
            }
            },
	    {
	        test: /\.(png|jpg|gif)$/,
	        loader: 'file-loader'

         },
	    {
	        test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
	    },
          {
              test: /\.json$/,
              loader: 'json-loader'
          }
      ]
   }
};
module.exports = config;
