import {scaleFontSize} from './layout';

export const Font = {
  POPPINS_BLACK: 'Poppins-Black',
  POPPINS_BOLD: 'Poppins-Bold',
  POPPINS_EXTRABOLD: 'Poppins-ExtraBold',
  POPPINS_EXTRALIGHT: 'Poppins-ExtraLight',
  POPPINS_ITALIC: 'Poppins-Italic',
  POPPINS_LIGHT: 'Poppins-Light',
  POPPINS_MEDIUM: 'Poppins-Medium',
  POPPINS_REGULAR: 'Poppins-Regular',
  POPPINS_SEMIBOLD: 'Poppins-SemiBold',
  POPPINS_THIN: 'Poppins-Thin',
};

export const Typography = {
  headline1: {
    fontFamily: Font.POPPINS_LIGHT,
    fontSize: scaleFontSize(96, 0.5),
    lineHeight: scaleFontSize(96 * 1.5, 0.5),
  },
  headline2: {
    fontFamily: Font.POPPINS_LIGHT,
    fontSize: scaleFontSize(60, 0.5),
    lineHeight: scaleFontSize(60 * 1.5, 0.5),
  },
  headline3: {
    fontFamily: Font.POPPINS_REGULAR,
    fontSize: scaleFontSize(48, 0.5),
    lineHeight: scaleFontSize(48 * 1.5, 0.5),
  },
  headline4: {
    fontFamily: Font.POPPINS_REGULAR,
    fontSize: scaleFontSize(34, 0.5),
    lineHeight: scaleFontSize(34 * 1.5, 0.5),
  },
  headline5: {
    fontFamily: Font.POPPINS_REGULAR,
    fontSize: scaleFontSize(24, 0.5),
    lineHeight: scaleFontSize(24 * 1.5, 0.5),
  },
  headline6: {
    fontFamily: Font.POPPINS_MEDIUM,
    fontSize: scaleFontSize(20, 0.5),
    lineHeight: scaleFontSize(20 * 1.5, 0.5),
  },
  subtitle1: {
    fontFamily: Font.POPPINS_MEDIUM,
    fontSize: scaleFontSize(16, 0.5),
    lineHeight: scaleFontSize(16 * 1.5, 0.5),
  },
  subtitle2: {
    fontFamily: Font.POPPINS_MEDIUM,
    fontSize: scaleFontSize(14, 0.5),
    lineHeight: scaleFontSize(14 * 1.5, 0.5),
  },
  body1: {
    fontFamily: Font.POPPINS_REGULAR,
    fontSize: scaleFontSize(16, 0.5),
    lineHeight: scaleFontSize(16 * 1.5, 0.5),
  },
  body2: {
    fontFamily: Font.POPPINS_REGULAR,
    fontSize: scaleFontSize(14, 0.5),
    lineHeight: scaleFontSize(14 * 1.5, 0.5),
  },
  caption: {
    fontFamily: Font.POPPINS_REGULAR,
    fontSize: scaleFontSize(12, 0.5),
    lineHeight: scaleFontSize(12 * 1.5, 0.5),
  },
  button: {
    fontFamily: Font.POPPINS_MEDIUM,
    fontSize: scaleFontSize(14, 0.5),
    lineHeight: scaleFontSize(14 * 1.5, 0.5),
  },
};
