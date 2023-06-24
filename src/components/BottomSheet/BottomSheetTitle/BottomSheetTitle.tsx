import {FC} from 'react';
import {Text} from 'react-native';
import useStyles from '@hooks/useStyles';
import {SharedValue} from 'react-native-reanimated';
import getBottomSheetTitleStyles from './BottomSheetTitleStyles';

type TBottomSheetTitleProps = {
  animatedIndex: SharedValue<number>;
  animatedPosition: SharedValue<number>;
  title?: string;
};

const BottomSheetTitle: FC<TBottomSheetTitleProps> = ({title = ''}) => {
  const styles = useStyles(getBottomSheetTitleStyles);

  return <Text style={styles.title}>{title}</Text>;
};

export default BottomSheetTitle;
