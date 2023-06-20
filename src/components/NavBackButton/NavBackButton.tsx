import React, {FC} from 'react';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import useStyles from '@hooks/useStyles';
import getNavBackButtonStyles from './NavBackButtonStyles';
import {scaleWidth} from '@theme/layout';

type TNavBackButtonProps = {
  label?: string;
};

const NavBackButton: FC<TNavBackButtonProps> = ({label = ''}) => {
  const styles = useStyles(getNavBackButtonStyles);
  const {canGoBack, goBack} = useNavigation();

  const onPress = () => {
    if (canGoBack()) {
      goBack();
    }
  };

  return (
    <TouchableOpacity
      hitSlop={scaleWidth(30, 0.5)}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default NavBackButton;
