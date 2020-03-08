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

  const rules = config.module.rules.map(rule => {
    // Exclude all node_modules from transpilation,
    // except for 'gatsby-source-prismic-graphql', 'gatsby-source-graphql-universal' and 'ts-optchain'
    if (String(rule.test) === String(/\.(js|mjs|jsx)$/)) {
      return { ...rule, exclude: testModulePath };
    }

    // Force images not to be base64 encoded
    if (String(rule.test) === String(/\.(ico|svg|jpg|jpeg|png|gif|webp)(\?.*)?$/)) {
      return { ...rule, use: ['file-loader'] };
    }

    return rule;
  });

  config.module.rules = [fontsRule, ...rules];
  actions.replaceWebpackConfig(config);
};
