const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../")
      },
      {
        test: /\.(ts|js)x?$/,
        include: path.resolve(__dirname, "../src/js"),
        exclude: [/node_modules/, /\bcore-js\b/],
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: {
              presets: [
                [
                  "es2015",
                  { useBuiltIns: "usage", debug: true, modules: false }
                ],
                "react",
                "stage-0"
              ]
            }
          },
          {
            loader: require.resolve("awesome-typescript-loader")
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts, .tsx"]
  }
};
