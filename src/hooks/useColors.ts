import {colors} from '@theme/colors';
import {useColorScheme} from 'react-native';

const useColors = () => {
  const osScheme = useColorScheme();
  const schemeName = osScheme || 'light';

  return colors[schemeName];
};

export default useColors;
