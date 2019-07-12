const path = require("path");

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    include: path.resolve(__dirname, "../")
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("babel-loader")
        // presets are inherited from .babelrc
      }
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  config.resolve.extensions.push(".scss");
  return config;
};
