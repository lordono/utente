module.exports = {
  stories: [
    "../packages/**/*.stories.mdx",
    "../packages/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async config => {
    // remove default css rule from storybook
    config.module.rules = config.module.rules.filter(
      f => f.test.toString() !== "/\\.css$/"
    );

    // push our custom css
    config.module.rules.push({
      test: /\.css$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: { modules: true }
        }
      ]
    });
    // // push our custom scss
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: { modules: true }
        },
        "sass-loader"
      ]
    });

    // This is where we change the order of resolution of main fields
    config.resolve.mainFields = ["src", "module", "main"];

    // Return the altered config
    return config;
  }
};
