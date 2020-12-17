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
    // Force images not to be base64 encoded
    if (String(rule.test) === String(/\.(ico|svg|jpg|jpeg|png|gif|webp)(\?.*)?$/)) {
      return { ...rule, use: ['file-loader'] };
    }

    return rule;
  });

  config.module.rules = [fontsRule, ...rules];
  actions.replaceWebpackConfig(config);
};
