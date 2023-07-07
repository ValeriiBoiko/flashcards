import {TCreateStylesParams} from '@hooks/useStyles';
import {scaleWidth} from '@theme/layout';
import {StyleSheet} from 'react-native';

const getBottomSheetStyles = ({colors, dimensions}: TCreateStylesParams) =>
  StyleSheet.create({
    background: {
      backgroundColor: colors.background,
      borderRadius: scaleWidth(20, 0.5),
    },
    contentContainer: {
      maxHeight: dimensions.height * 0.85,
    },
  });

export default getBottomSheetStyles;
