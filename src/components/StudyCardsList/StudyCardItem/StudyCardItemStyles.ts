import {StyleSheet} from 'react-native';
import {scaleWidth} from '@theme/layout';
import {Typography} from '@theme/typography';
import {TCreateStylesParams} from '@hooks/useStyles';

const getStudyCardItemStyles = ({colors}: TCreateStylesParams) =>
  StyleSheet.create({
    container: {
      borderRadius: 10,
      backgroundColor: colors.card,
    },
    contentContainer: {
      padding: 0,
      flexDirection: 'row',
      overflow: 'hidden',
      borderRadius: scaleWidth(10),
      alignItems: 'center',
      paddingRight: scaleWidth(20),
    },
    imageContainer: {
      marginRight: scaleWidth(20),
      backgroundColor: colors.secondary,
      borderRadius: scaleWidth(10),
    },

    image: {
      aspectRatio: 1.5,
      width: scaleWidth(80),
      borderRadius: scaleWidth(5),
    },
    info: {
      flex: 1,
    },
    title: {
      ...Typography.body2,
      color: colors.text,
    },
    description: {
      ...Typography.caption,
      fontSize: 11,
      color: colors.border,
    },
  });

export default getStudyCardItemStyles;
