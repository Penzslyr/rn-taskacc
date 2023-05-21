import { Dimensions } from 'react-native';

const Fonts = {
  Nunito: {
    Bold: 'Nunito-Bold',
    BoldItalic: 'Nunito-BoldItalic',
    SemiBold: 'Nunito-SemiBold',
    SemiBoldItalic: 'Nunito-SemiBoldItalic',
    Regular: 'Nunito-Regular',
  },
};

const WIDHT = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
const horizontalScale = (size) => (WIDHT / guidelineBaseWidth) * size;
const verticalScale = (size) => (HEIGHT / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

const SHADOW = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
};

export { Fonts, WIDHT, HEIGHT, horizontalScale, verticalScale, moderateScale, SHADOW};
