const keysTransformer = require('ts-transformer-keys/transformer').default;

const addKeysTransformerToTsLoader = (config) => {
  const rules = config.module.rules.filter((rule) =>
    rule.loader.toString().match(/ts-loader/)
  );

  rules.forEach((rule) => {
    rule.options.getCustomTransformers = (program) => ({
      before: [keysTransformer(program)],
    });
  });

  return config;
};

module.exports = (config) => {
  return addKeysTransformerToTsLoader(config);
};
