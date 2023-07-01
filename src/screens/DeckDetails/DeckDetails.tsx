import ScreenTitle from '@components/ScreenTitle/ScreenTitle';
import {TCardsNavigatorParamList} from '@navigation/CardsNavigator';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {scaleWidth} from '@theme/layout';
import React, {useLayoutEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DeckProgress from './DeckProgress';
import Button from '@components/Button';
import TextInput from '@components/TextInput';
import ShadowBox from '@components/ShadowBox';
import AnimatedMountView from '@components/AnimatedMountView/AnimatedMountView';
import StudyCardsList from '@components/StudyCardsList/StudyCardsList';
import useStyles from '@hooks/useStyles';
import getDeckDetailsStyles from './DeckDetailsStyles';
import useColors from '@hooks/useColors';

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
    title: 'Title',
    description: 'Description',
    progress: 0,
    imageUrl: 'https://podcastaddict.com/cache/artwork/thumb/3530816',
  },
  {
    id: '2',
    title: 'Title 1',
    description: 'Description 1',
    progress: 50,
    imageUrl: 'https://podcastaddict.com/cache/artwork/thumb/3530816',
  },
  {
    id: '3',
    title: 'Title 2',
    description: 'Description 2',
    progress: 80,
    imageUrl: 'https://podcastaddict.com/cache/artwork/thumb/3530816',
  },
];

const DeckDetails = () => {
  const colors = useColors();
  const styles = useStyles(getDeckDetailsStyles);
  const navigation =
    useNavigation<StackNavigationProp<TCardsNavigatorParamList>>();

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
  }, [deck]);

  return (
    <View style={[{paddingHorizontal: 20}]}>
      <AnimatedMountView runAfterInterraction duration={400}>
        <DeckProgress />
      </AnimatedMountView>

      <AnimatedMountView runAfterInterraction duration={400} delay={200}>
        <View style={{flexDirection: 'row'}}>
          <Button title="Study cards" style={{flex: 1, marginRight: 15}} />
          <Button rightIcon={'add'} />
        </View>

        <ShadowBox
          style={{marginTop: 20}}
          shadowColor={colors.shadow}
          shadowOpacity={0.02}
          shadowRadius={10}>
          <TextInput placeholder="Search card" />
        </ShadowBox>
      </AnimatedMountView>

      <AnimatedMountView
        runAfterInterraction
        duration={400}
        delay={400}
        style={{marginTop: 20}}>
        <StudyCardsList data={cards} />
      </AnimatedMountView>
    </View>
  );
};

export default DeckDetails;
