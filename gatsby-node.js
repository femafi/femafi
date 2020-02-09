const testModulePath = modulePath => {
  return /node_modules/.test(modulePath) &&
    !/node_modules\/(gatsby-source-prismic-graphql|gatsby-source-graphql-universal|ts-optchain)/.test(modulePath);
};

exports.createPages = require('./src/utils/createPages');

exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig();

  const fontsRule = {
    test: /\.(woff|woff2|otf|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'file-loader',
    options: {
      name: 'static/fonts/[name].[ext]'
    }
  };

  // Exclude all node_modules from transpilation,
  // except for 'gatsby-source-prismic-graphql', 'gatsby-source-graphql-universal' and 'ts-optchain'
  const newJSXRule = {
    ...loaders.js(),
    test: /\.jsx?$/,
    exclude: testModulePath
  };

  const rulesWithoutJSX = config.module.rules.filter(rule => String(rule.test) !== String(/\.jsx?$/));
  config.module.rules = [fontsRule, ...rulesWithoutJSX, newJSXRule];
  actions.replaceWebpackConfig(config);
};
