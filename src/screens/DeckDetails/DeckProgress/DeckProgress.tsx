import React, {useMemo} from 'react';
import useColors from '@hooks/useColors';
import useStyles from '@hooks/useStyles';
import {scaleWidth} from '@theme/layout';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import getDeckProgressStyles from './DeckProgressStyles';
import DonutChart from '@components/DonutChart/DonutChart';
import Badge from '@components/Badge/Badge';

const deck = {
  id: '1',
  category: 'language_learning',
  name: 'English',
  cardsTotal: 16,
  cardsInProgress: 2,
  cardsCompleted: 7,
};

const DeckProgress = () => {
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

  return (
    <View style={styles.container}>
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

      <View>
        <DonutChart
          size={scaleWidth(100)}
          thickness={scaleWidth(10)}
          data={deckMetrics}
        />

        <Icon name={'topic'} style={styles.deckIcon} />
      </View>
    </View>
  );
};

export default DeckProgress;
