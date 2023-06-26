import React, {FC} from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import useStyles from '@hooks/useStyles';
import getCardStyles from './CardStyles';
import ShadowBox from '@components/ShadowBox/ShadowBox';

type TCardProps = {
  shadowRadius?: number;
  shadowOpacity?: number;
  shadowColor?: string;
  children: React.ReactNode | React.ReactNode[];
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const Card: FC<TCardProps> = ({
  shadowRadius = 10,
  shadowOpacity = 0.02,
  shadowColor = '#000',
  children,
  style,
  onPress,
}) => {
  const styles = useStyles(getCardStyles);

  return (
    <TouchableOpacity
      disabled={!onPress}
      activeOpacity={1}
      style={style}
      onPress={onPress}>
      <ShadowBox
        style={styles.card}
        shadowColor={shadowColor}
        shadowOpacity={shadowOpacity}
        shadowRadius={shadowRadius}>
        {children}
      </ShadowBox>
    </TouchableOpacity>
  );
};

export default Card;
