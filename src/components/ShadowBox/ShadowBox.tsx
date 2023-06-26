import useStyles from '@hooks/useStyles';
import React, {FC, useMemo} from 'react';
import {StyleSheet, View, ViewProps, ViewStyle} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import getShadowBoxStyles from './ShadowBoxStyles';

type TShadowBox = ViewProps & {
  children?: React.ReactNode;
  shadowColor?: string;
  xOffset?: number;
  yOffset?: number;
  shadowRadius?: number;
  shadowOpacity?: number;
  style: ViewStyle;
};

const ShadowBox: FC<TShadowBox> = ({
  xOffset = 0,
  yOffset = 0,
  shadowOpacity = 1,
  shadowRadius,
  shadowColor,
  children,
  style,
  ...props
}) => {
  const styleProps = useMemo<{style: ViewStyle}>(() => {
    return {style: StyleSheet.flatten<ViewStyle>(style)};
  }, [style]);

  const styles = useStyles(getShadowBoxStyles, styleProps);

  return (
    <View {...props} style={style}>
      <View style={[StyleSheet.absoluteFill, {opacity: shadowOpacity}]}>
        <Shadow
          startColor={shadowColor}
          distance={shadowRadius}
          style={styles.shadowBox}
        />
      </View>

      {children}
    </View>
  );
};

export default ShadowBox;
