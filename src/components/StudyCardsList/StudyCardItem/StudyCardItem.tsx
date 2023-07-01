import Badge from '@components/Badge/Badge';
import ShadowBox from '@components/ShadowBox/ShadowBox';
import useColors from '@hooks/useColors';
import useStyles from '@hooks/useStyles';
import React, {FC} from 'react';
import {StyleProp, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import getStudyCardItemStyles from './StudyCardItemStyles';
import ImageWithFallback from '@components/ImageWithFallback';

type TStudyCardItem = {
  id: string;
  title: string;
  imageUrl?: string;
  description: string;
  learningProgress: number;
  style?: StyleProp<ViewStyle>;
  onPress?: (id: string) => void;
};

const StudyCardItem: FC<TStudyCardItem> = ({
  id,
  title,
  imageUrl,
  description,
  learningProgress,
  style,
  onPress,
}) => {
  const colors = useColors();
  const styles = useStyles(getStudyCardItemStyles);

  const getBadgeColor = () => {
    if (learningProgress >= 75) {
      return colors.success;
    } else if (learningProgress > 0) {
      return colors.brand;
    }

    return colors.secondary;
  };

  return (
    <TouchableOpacity style={style} onPress={() => onPress?.(id)}>
      <ShadowBox
        shadowOpacity={0.02}
        shadowRadius={10}
        style={styles.container}>
        <View style={styles.contentContainer}>
          <ShadowBox
            style={styles.imageContainer}
            shadowColor={colors.shadow}
            shadowOpacity={0.05}
            shadowRadius={10}>
            <ImageWithFallback
              style={styles.image}
              source={{
                uri: imageUrl,
              }}
            />
          </ShadowBox>

          <View style={styles.info}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>

          <Badge color={getBadgeColor()} size={8} />
        </View>
      </ShadowBox>
    </TouchableOpacity>
  );
};

export default React.memo(StudyCardItem);
