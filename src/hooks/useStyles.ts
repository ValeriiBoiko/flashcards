import {
  ScaledSize,
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';
import useColors from './useColors';
import {TColors} from '@theme/colors';
import {useMemo} from 'react';

export type TCreateStylesParams = {
  colors: TColors;
  dimensions: ScaledSize;
  scheme: 'dark' | 'light' | null;
};

export type TCreateStyles<T> = (
  data: TCreateStylesParams,
) => StyleSheet.NamedStyles<T>;

const useStyles = <T extends unknown>(getStyles: TCreateStyles<T>) => {
  const colors = useColors();
  const osScheme = useColorScheme();
  const dimensions = useWindowDimensions();

  const styles = useMemo(() => {
    return getStyles({
      colors,
      dimensions,
      scheme: osScheme || 'light',
    });
  }, [colors, osScheme, dimensions, getStyles]);

  return styles;
};

export default useStyles;
