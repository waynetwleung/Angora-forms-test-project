const path = require("path");
const customComponents = require('./src/app/customcomponent/angora.components.ts')

module.exports = {
  mode: "development",
  entry: ["./src/main.ts"],
  output: {
    filename: "main.js", 
    path: path.resolve(__dirname, "dist"), 
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.ts$/, 
        use: [
          {
            loader: "webpack-loader",
            options: {
              customComponents: customComponents
            }
          },
        ],
      },
    ],
  },
};




