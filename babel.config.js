const path = require('path');

module.exports = function overrideBabelConfig(api) {
  api.cache(true);

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      '@emotion',
      [
        'module-resolver',
      ],
    ],
  };
};
