// const path = require("path");

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.(s*)css$/,
//         loaders: ["style-loader", "css-loader", "sass-loader"],
//         include: path.resolve(__dirname, "../")
//       },
//       {
//         test: /\.(ts|js)x?$/,
//         include: path.resolve(__dirname, "../"),
//         exclude: [/node_modules/, /\bcore-js\b/],
//         use: [
//           {
//             loader: require.resolve("babel-loader"),
//             options: {
//               presets: [
//                 [
//                   "es2015",
//                   { useBuiltIns: "usage", debug: false, modules: "commonjs" }
//                 ],
//                 "react",
//                 "stage-0"
//               ]
//             }
//           },
//           {
//             loader: require.resolve("awesome-typescript-loader")
//           }
//         ]
//       }
//     ]
//   },
//   resolve: {
//     extensions: [".ts, .tsx"]
//   }
// };

const path = require("path");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../")
  });

  config.module.rules.push({
    test: /\.(ts|js)x?$/,
    exclude: /node_modules/,
    include: [/\/src\/js$/],
    loaders: [
      {
        loader: require.resolve("babel-loader")
      },
      require.resolve("awesome-typescript-loader")
    ]
  });
  // defaultConfig.plugins.push(new TSDocgenPlugin());
  config.resolve.extensions.push(".ts", ".tsx");
  config.resolve.extensions.push(".scss");

  return config;
};
