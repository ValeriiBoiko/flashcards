import React, {FC} from 'react';
import {Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import useStyles from '@hooks/useStyles';
import Card from '@components/Card';
import ProgressBar from '@components/ProgressBar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import getDeckCardStyles from './DeckCardStyles';

type TDeckCardProps = {
  title: string;
  iconName?: string;
  numberOfCards: number;
  completedCards: number;
  style?: ViewStyle;
  onPress?: () => void;
};

const DeckCard: FC<TDeckCardProps> = ({
  title,
  style,
  iconName,
  numberOfCards,
  completedCards,
  onPress,
}) => {
  const styles = useStyles(getDeckCardStyles);

  return (
    <TouchableOpacity activeOpacity={0.8} style={style} onPress={onPress}>
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
  );
};

export default React.memo(DeckCard);
