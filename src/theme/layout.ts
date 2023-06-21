import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const BASE_WIDTH = 375;
const BASE_HEIGHT = 667;
const widthRelation = width / BASE_WIDTH;
const heightRelation = height / BASE_HEIGHT;

export const scalePixel = (
  value: number,
  relation: number,
  coefficient = 1,
) => {
  const scaledValue = value * relation;
  const adjustedValue = Math.abs(scaledValue - value) * coefficient;

  if (relation > 1) {
    return value + adjustedValue;
  } else if (relation < 1) {
    return value - adjustedValue;
  }

  return scaledValue;
};

export const scaleHeight = (value = 0, coefficient = 0.5) => {
  return scalePixel(value, heightRelation, coefficient);
};

export const scaleWidth = (value = 0, coefficient = 0.5) => {
  return scalePixel(value, widthRelation, coefficient);
};

export const scaleFontSize = scaleWidth;
