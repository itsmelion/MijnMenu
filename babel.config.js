module.exports = function overrideBabelConfig(api) {
  api.cache(true);

  return {
    presets: [
      ['module:metro-react-native-babel-preset', { useTransformReactJSXExperimental: true }],
    ],
    plugins: [
      '@emotion',
      '@babel/plugin-proposal-export-namespace-from',
      [
        '@babel/plugin-transform-react-jsx',
        {
          runtime: 'automatic',
        },
      ],
      [
        'module-resolver',
      ],
    ],
  };
};
