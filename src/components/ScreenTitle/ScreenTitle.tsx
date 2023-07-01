import React, {FC} from 'react';
import useStyles from '@hooks/useStyles';
import getScreenTitleStyle from './ScreenTitleStyle';
import {StyleProp, Text, TextStyle} from 'react-native';

type TScreenTitle = {
  title: string;
  style?: StyleProp<TextStyle>;
};

const ScreenTitle: FC<TScreenTitle> = ({title, style}) => {
  const styles = useStyles(getScreenTitleStyle);

  return <Text style={[styles.title, style]}>{title}</Text>;
};

export default ScreenTitle;
