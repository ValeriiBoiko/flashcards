import {StyleProp} from 'react-native';

export const mergeStyles = <T = any>(style: T | T[]): T => {
  if (Array.isArray(style)) {
    return style.reduce<StyleProp<any>>((result, current) => {
      if (typeof current === 'object') {
        return {
          ...result,
          ...current,
        };
      }

      return result;
    }, {});
  }

  return style;
};
