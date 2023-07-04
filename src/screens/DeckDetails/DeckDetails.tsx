import ScreenTitle from '@components/ScreenTitle/ScreenTitle';
import {TCardsNavigatorParamList} from '@navigation/CardsNavigator';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {scaleHeight, scaleWidth} from '@theme/layout';
import React, {useLayoutEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DeckProgress from './DeckProgress';
import Button from '@components/Button';
import AnimatedMountView from '@components/AnimatedMountView/AnimatedMountView';
import StudyCardsList from '@components/StudyCardsList/StudyCardsList';
import useStyles from '@hooks/useStyles';
import getDeckDetailsStyles from './DeckDetailsStyles';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedProps,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

const deck = {
  id: '1',
  category: 'language_learning',
  name: 'English',
  cardsTotal: 16,
  cardsInProgress: 2,
  cardsCompleted: 7,
};

const cards = [
  {
    id: '1',
    title: 'Title 1',
    description: 'Description',
    progress: 0,
    imageUrl: 'https://podcastaddict.com/cache/artwork/thumb/3530816',
  },
  {
    id: '2',
    title: 'Title 2',
    description: 'Description 1',
    progress: 50,
    imageUrl: 'https://podcastaddict.com/cache/artwork/thumb/3530816',
  },
  {
    id: '3',
    title: 'Title 3',
    description: 'Description 2',
    progress: 80,
    imageUrl: 'https://podcastaddict.com/cache/artwork/thumb/3530816',
  },
];

const DeckDetails = () => {
  const styles = useStyles(getDeckDetailsStyles);
  const navigation =
    useNavigation<StackNavigationProp<TCardsNavigatorParamList>>();

  const SCALED_PIXEL = scaleHeight(1, 0.5);
  const scrollSharedValue = useSharedValue(0);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Home',
      headerRight: () => (
        <View style={styles.screenTitleWrapper}>
          <ScreenTitle title={deck.name} style={{}} />

          <TouchableOpacity
            hitSlop={scaleWidth(20)}
            style={styles.infoIconWrapper}>
            <Icon name={'more-vert'} style={styles.infoIcon} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [deck.name]);

  const onScroll = useAnimatedScrollHandler(({contentOffset}) => {
    scrollSharedValue.value = interpolate(
      contentOffset.y,
      [0, SCALED_PIXEL * 70],
      [0, 1],
      {
        extrapolateRight: Extrapolate.CLAMP,
      },
    );
  });

  const progressBlockStyle = useAnimatedProps(() => ({
    transform: [
      {
        translateY: interpolate(
          scrollSharedValue.value,
          [0, 1],
          [SCALED_PIXEL * 30, SCALED_PIXEL * -10],
        ),
      },
    ],
  }));

  const buttonsBlockStyle = useAnimatedProps(() => ({
    transform: [
      {
        translateY: interpolate(
          scrollSharedValue.value,
          [0, 1],
          [SCALED_PIXEL * 70, 0],
        ),
      },
    ],
  }));

  return (
    <View style={styles.container}>
      <AnimatedMountView
        style={{flex: 1}}
        runAfterInterraction
        duration={400}
        delay={400}>
        <StudyCardsList
          renderToHardwareTextureAndroid
          style={styles.cardsList}
          contentContainerStyle={styles.cardsListContentContainer}
          data={cards}
          scrollEventThrottle={16}
          onScroll={onScroll}
        />
      </AnimatedMountView>

      <AnimatedMountView runAfterInterraction duration={400} delay={200}>
        <Animated.View style={buttonsBlockStyle}>
          <View style={styles.buttonsRow}>
            <Button title="Study cards" style={styles.startButton} />
            <Button rightIcon={'add'} />
          </View>
        </Animated.View>
      </AnimatedMountView>

      <AnimatedMountView runAfterInterraction duration={400}>
        <DeckProgress
          scrollProgress={scrollSharedValue}
          style={progressBlockStyle}
        />
      </AnimatedMountView>
    </View>
  );
};

export default DeckDetails;
