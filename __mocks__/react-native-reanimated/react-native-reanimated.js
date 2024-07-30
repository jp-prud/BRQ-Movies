const Reanimated = require('react-native-reanimated/src/mock');
const Animated = Reanimated.default;

module.exports = {
  ...Reanimated,

  default: {
    ...Animated,
  },
};