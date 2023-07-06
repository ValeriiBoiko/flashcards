import {useCallback, useState} from 'react';
import {LayoutChangeEvent, LayoutRectangle} from 'react-native';

const useLayout = () => {
  const [layout, setLayout] = useState<LayoutRectangle | null>(null);

  const onLayout = useCallback(({nativeEvent}: LayoutChangeEvent) => {
    setLayout(nativeEvent.layout);
  }, []);

  return [layout, onLayout] as const;
};

export default useLayout;
