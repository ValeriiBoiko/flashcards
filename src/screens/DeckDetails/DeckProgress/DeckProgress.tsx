import React, {FC, useMemo} from 'react';
import useColors from '@hooks/useColors';
import useStyles from '@hooks/useStyles';
import {scaleWidth} from '@theme/layout';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import getDeckProgressStyles from './DeckProgressStyles';
import DonutChart from '@components/DonutChart/DonutChart';
import Badge from '@components/Badge/Badge';
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {categoriesIconMap} from 'src/const/categories';

const deck = {
  id: '1',
  category: 'language_learning',
  name: 'English',
  cardsTotal: 16,
  cardsInProgress: 2,
  cardsCompleted: 7,
};

const AnimatedIcon = Animated.createAnimatedComponent(Icon);

type TDeckProgressProps = {
  scrollProgress: SharedValue<number>;
  style?: StyleProp<ViewStyle>;
};

const DeckProgress: FC<TDeckProgressProps> = ({scrollProgress, style}) => {
  const colors = useColors();
  const styles = useStyles(getDeckProgressStyles);

  const deckMetrics = useMemo(
    () => [
      {
        value: deck.cardsCompleted,
        label: 'Completed',
        color: colors.success,
      },
      {
        value: deck.cardsInProgress,
        label: 'In Progress',
        color: colors.brand,
      },
      {
        value: deck.cardsTotal - deck.cardsCompleted - deck.cardsInProgress,
        label: 'Not Started',
        color: colors.secondary,
      },
    ],
    [deck, colors],
  );

  const chartWrapperStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(scrollProgress.value, [0, 1], [1, 0.65]),
        },
      ],
    };
  }, [scrollProgress]);

  return (
    <Animated.View style={[styles.container, style]}>
      <View>
        <Text style={styles.cardsNumberValue}>9</Text>
        <Text style={styles.cardsNumberLabel}>cards</Text>
      </View>

      <View>
        {deckMetrics.map(({value, label, color}, index) => (
          <View key={index} style={styles.legendItem}>
            <Badge color={color} size={6} style={styles.legendItemBadge} />
            <Text style={styles.legendItemValue}>{value}</Text>
            <Text style={styles.legendItemLabel}>{label}</Text>
          </View>
        ))}
      </View>

      <Animated.View style={[styles.chartWrapper, chartWrapperStyle]}>
        <DonutChart
          size={scaleWidth(100)}
          thickness={scaleWidth(10)}
          data={deckMetrics}
        />
        <AnimatedIcon
          name={categoriesIconMap[deck.category]}
          style={[styles.deckIcon]}
        />
      </Animated.View>
    </Animated.View>
  );
};

export default DeckProgress;
