module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-flow-strip-types',
    '@babel/plugin-proposal-optional-chaining',
    'transform-es2015-modules-commonjs',
    'babel-plugin-dynamic-import-node',
    'babel-plugin-styled-components',
    'inline-react-svg',
    [
      'module-resolver',
      {
        alias: {
          api: './src/api',
          components: './src/components',
          containers: './src/containers',
          contextApi: './src/contextApi',
          customHooks: './src/custom-hooks',
          helpers: './src/helpers',
          actions: './src/redux/actions',
          reducers: './src/redux/reducers',
          selectors: './src/redux/selectors'
        }
      }
    ]
  ]
}
