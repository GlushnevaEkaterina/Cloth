module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-transform-flow-strip-types',
    ['@babel/plugin-proposal-class-properties', {loose: true}],
    'react-native-reanimated/plugin',
  ],
}
