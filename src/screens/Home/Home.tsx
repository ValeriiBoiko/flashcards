import React from 'react';

const Home = () => {
  const navigation =
    useNavigation<StackNavigationProp<TCardsNavigatorParamList>>();
  const styles = useStyles(getHomeStyles);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <DrawerButton style={styles.menu} />,
    });

  return null;
};

export default Home;
