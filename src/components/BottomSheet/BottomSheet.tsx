import {
  BottomSheetModal,
  BottomSheetProps,
  BottomSheetHandleProps,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import React, {useCallback, useMemo} from 'react';
import {View, ViewProps, ViewStyle} from 'react-native';
import BottomSheetBackdrop from './BottomSheetBackdrop';
import {StyleProp} from 'react-native';
import BottomSheetTitle from './BottomSheetTitle';
import useStyles from '@hooks/useStyles';
import getBottomSheetStyles from './BottomSheetStyles';

export type TBottomSheetProps = {
  contentContainerStyle?: StyleProp<ViewStyle>;
  children: ViewProps['children'];
  style?: BottomSheetProps['style'];
  title?: string;
};

const BottomSheet: React.ForwardRefRenderFunction<
  BottomSheetModal,
  TBottomSheetProps
> = ({title, children, contentContainerStyle, style}, forwardedRef) => {
  const styles = useStyles(getBottomSheetStyles);
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

  const handleComponent = useCallback(
    (props: BottomSheetHandleProps) => (
      <BottomSheetTitle title={title} {...props} />
    ),
    [title],
  );

  return (
    <BottomSheetModal
      ref={forwardedRef}
      backdropComponent={BottomSheetBackdrop}
      handleComponent={handleComponent}
      snapPoints={animatedSnapPoints}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
      backgroundStyle={styles.background}
      style={style}>
      <View style={contentContainerStyle} onLayout={handleContentLayout}>
        {children}
      </View>
    </BottomSheetModal>
  );
};

export default React.forwardRef(BottomSheet);
