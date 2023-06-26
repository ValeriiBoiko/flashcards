import {Pressable, Text, View} from 'react-native';
import React, {
  ForwardRefRenderFunction,
  forwardRef,
  useRef,
  useState,
} from 'react';
import useStyles from '@hooks/useStyles';

import Button from '@components/Button/Button';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import BottomSheet from '@components/BottomSheet/BottomSheet';
import {BottomSheetModal, BottomSheetTextInput} from '@gorhom/bottom-sheet';
import Card from '@components/Card/Card';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useColors from '@hooks/useColors';
import getAddDeckBottomSheetStyles from './AddDeckBottomSheetStyles';
import CategoriesList from '@components/CategoriesList/CategoriesList';
import TextInput from '@components/TextInput/TextInput';
import Clipboard from '@react-native-clipboard/clipboard';

type TCategory = {
  id: string;
  icon: string;
  name: string;
};

const categories: TCategory[] = [
  {
    id: '1',
    icon: 'topic',
    name: 'Miscellaneous',
  },
  {
    id: '2',
    icon: 'translate',
    name: 'Language Learning',
  },
  {
    id: '3',
    icon: 'monitor',
    name: 'Science and Technology',
  },
  {
    id: '4',
    icon: 'public',
    name: 'History and Geography',
  },
  {
    id: '5',
    icon: 'palette',
    name: 'Arts and Literature',
  },
  {
    id: '6',
    icon: 'school',
    name: 'Test Preparation',
  },
  {
    id: '7',
    icon: 'functions',
    name: 'Math and Logic',
  },
];

const AddDeckBottomSheet: ForwardRefRenderFunction<BottomSheetModal, any> = (
  {},
  forwardedRef,
) => {
  const colors = useColors();
  const styles = useStyles(getAddDeckBottomSheetStyles);
  const categoriesAnimation = useSharedValue(0);
  const categoriesContainerRef = useRef<Animated.View | null>(null);
  const saveButtonContainerRef = useRef<View | null>(null);

  const [deckName, setDeckName] = useState('');

  const [categoriesTargetHeight, setCategorisHeight] = useState(0);
  const [category, setCategory] = useState<TCategory>(categories[0]);

  const deckUrl = 'http://flashcard.com/QkkALfxsIQkkALfxsI';

  const onPressCategories = () => {
    const value = categoriesAnimation.value;

    if (value === 1 || value === 0) {
      categoriesAnimation.value = withTiming(value ? 0 : 1, {
        duration: 175,
      });
    }
  };

  const categoriesWrapperStyles = useAnimatedStyle(
    () => ({
      height: interpolate(
        categoriesAnimation.value,
        [0, 1],
        [0, categoriesTargetHeight],
      ),
      paddingBottom: interpolate(categoriesAnimation.value, [0.2, 1], [0, 15]),
      opacity: interpolate(categoriesAnimation.value, [0, 1], [0, 1]),
    }),
    [categoriesTargetHeight],
  );

  const onChageListHeight = () => {
    categoriesContainerRef.current?.measure(
      (x, y, width, height, pageX, cardPageY) => {
        saveButtonContainerRef.current?.measure(
          (x, y, width, buttonHeight, pageX, buttonPageY) => {
            setCategorisHeight(buttonPageY + buttonHeight - cardPageY);
          },
        );
      },
    );
  };

  const onChangeCategory = (value: string) => {
    const result = categories.find(({id}) => value === id);

    if (result) {
      setCategory(result);
      onPressCategories();
    }
  };

  const onCopyUrl = () => {
    Clipboard.setString(deckUrl);
  };

  return (
    <BottomSheet
      ref={forwardedRef}
      title={'Add Deck'}
      style={{paddingHorizontal: 20}}>
      <View style={styles.bottomSheet}>
        <View ref={saveButtonContainerRef} onLayout={onChageListHeight}>
          <Button
            size={'lg'}
            disabled={!deckName}
            style={styles.saveButton}
            title="Save Deck"
          />
        </View>

        <View style={styles.shareContainer}>
          <Text numberOfLines={1} style={styles.shareLink}>
            {deckUrl}
          </Text>
          <Button
            size={'lg'}
            type={'tertiary'}
            title={'Copy'}
            rightIcon={'content-copy'}
            onPress={onCopyUrl}
          />
        </View>

        <Card>
          <Pressable
            style={styles.categoryContainer}
            onPress={onPressCategories}>
            <Icon name={category.icon} size={35} color={colors.brand} />

            <View style={styles.editContainer}>
              <Icon name={'edit'} style={styles.editIcon} />
            </View>
          </Pressable>

          <View style={{width: '100%', marginTop: 20}}>
            <BottomSheetTextInput
              value={deckName}
              maxLength={32}
              onChangeText={setDeckName}
              placeholder="Type deck name"
              style={styles.deckNameInput}
            />

            <Animated.View
              ref={categoriesContainerRef}
              style={[styles.categoriesListContainer, categoriesWrapperStyles]}
              onLayout={onChageListHeight}>
              <CategoriesList
                items={categories}
                onPressItem={onChangeCategory}
              />
            </Animated.View>
          </View>
        </Card>
      </View>
    </BottomSheet>
  );
};

export default forwardRef(AddDeckBottomSheet);
