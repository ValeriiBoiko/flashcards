import React, {FC} from 'react';
import {Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import useStyles from '@hooks/useStyles';
import Card from '@components/Card';
import ProgressBar from '@components/ProgressBar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import getDeckCardStyles from './DeckCardStyles';
import AnimatedMountView from '@components/AnimatedMountView/AnimatedMountView';

type TDeckCardProps = {
  id: string;
  title: string;
  iconName?: string;
  numberOfCards: number;
  completedCards: number;
  animationDelay?: number;
  style?: ViewStyle;
  onPress?: (id: string) => void;
};

const DeckCard: FC<TDeckCardProps> = ({
  id,
  title,
  style,
  iconName,
  numberOfCards,
  completedCards,
  animationDelay = 0,
  onPress,
}) => {
  const styles = useStyles(getDeckCardStyles);

  return (
    <AnimatedMountView duration={400} delay={animationDelay} style={style}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => onPress?.(id)}>
        <Card>
          <Icon style={styles.icon} name={iconName || 'topic'} />

          <View style={styles.titleWrapper}>
            <Text numberOfLines={2} style={styles.title}>
              {title}
            </Text>
          </View>
          <Text style={styles.subtitle}>{numberOfCards} cards</Text>

          <ProgressBar
            value={(completedCards / numberOfCards) * 100}
            height={10}
          />
        </Card>
      </TouchableOpacity>
    </AnimatedMountView>
  );
};

export default React.memo(DeckCard);
