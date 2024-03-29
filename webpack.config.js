const path = require("path");

module.exports = {
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader",
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.md$/,
          use: [
            {
              loader: 'json-loader',
            },
            {
              loader: 'gray-matter-loader',
              options: {
                parserOptions: { year: true }
              }
            },
            {
              loader: 'raw-loader',
            },
          ],
        },  
      ],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, "."),
      },
      compress: true,
      port: 9000, 
      historyApiFallback: {
        index: "index.html",
      },
    },
  };