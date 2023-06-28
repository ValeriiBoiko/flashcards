import {
  ScaledSize,
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';
import useColors from './useColors';
import {TColors} from '@theme/colors';
import {useMemo} from 'react';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';

export type TCreateStylesParams<T = {[key: string]: any}> = {
  insets: EdgeInsets;
  colors: TColors;
  dimensions: ScaledSize;
  scheme: 'dark' | 'light' | null;
  props: T;
};

export type TCreateStyles<T, P = {[key: string]: any}> = (
  data: TCreateStylesParams<P>,
) => StyleSheet.NamedStyles<T>;

const useStyles = <T extends unknown, P = {[key: string]: any}>(
  getStyles: TCreateStyles<T, P>,
  props?: any,
) => {
  const colors = useColors();
  const osScheme = useColorScheme();
  const insets = useSafeAreaInsets();
  const dimensions = useWindowDimensions();

  const styles = useMemo(() => {
    return getStyles({
      insets,
      colors,
      dimensions,
      scheme: osScheme || 'light',
      props: props || {},
    });
  }, [colors, osScheme, dimensions, props, getStyles]);

  return styles;
};

export default useStyles;
