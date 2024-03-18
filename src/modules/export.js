module.exports = {
    // Other webpack configurations...
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader', // inject CSS into the DOM
            'css-loader',   // translate CSS into CommonJS
            'sass-loader'   // compile Sass to CSS
          ]
        }
      ]
    }
  };