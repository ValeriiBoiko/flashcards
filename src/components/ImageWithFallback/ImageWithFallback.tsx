import React, {FC, useState} from 'react';
import useStyles from '@hooks/useStyles';
import {
  Image,
  ImageErrorEventData,
  ImageProps,
  NativeSyntheticEvent,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import getImageWithFallbackStyles from './ImageWithFallbackStyles';

type TImageWithFallbackProps = ImageProps & {
  containerStyle?: StyleProp<ViewStyle>;
  iconSize?: number;
};

const isValidSource = (source: any) => {
  if (!source || !source?.uri) {
    return false;
  }

  return true;
};

const ImageWithFallback: FC<TImageWithFallbackProps> = ({
  containerStyle,
  iconSize = 24,
  ...props
}) => {
  const styles = useStyles(getImageWithFallbackStyles);

  const [fallbackVisible, setFallbackFlag] = useState(
    isValidSource(props.source),
  );

  const handleError = (error: NativeSyntheticEvent<ImageErrorEventData>) => {
    setFallbackFlag(true);

    props.onError?.(error);
  };

  return (
    <View style={containerStyle}>
      {fallbackVisible && fallbackVisible}
      <View style={styles.iconWrapper}>
        <Icon name={'image'} size={iconSize} style={styles.icon} />
      </View>

      <Image {...props} onError={handleError} />
    </View>
  );
};

export default React.memo(ImageWithFallback);
