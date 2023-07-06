import {StyleProp, ViewStyle} from 'react-native';
import React, {FC, useMemo} from 'react';
import useColors from '@hooks/useColors';
import {hexToRgb} from 'src/utils/colors';
import {Defs, Mask, Path, Rect, Svg} from 'react-native-svg';
import useLayout from '@hooks/useLayout';

type TAudioTrackProps = {
  stepWidth?: number;
  progress?: number;
  style?: StyleProp<ViewStyle>;
};

const AudioTrack: FC<TAudioTrackProps> = ({
  style,
  stepWidth = 8,
  progress = 0,
}) => {
  const colors = useColors();
  const [layout, onLayout] = useLayout();

  const width = layout?.width || 1;
  const height = layout?.height || 1;

  const path = useMemo(() => {
    if (layout) {
      const array = new Array(Math.ceil(width / stepWidth)).fill(0);

      const nodes = array.map((_, index) => {
        const startX = index * stepWidth;
        const endX = startX + (stepWidth - 2);
        const startY = height * Math.random() * 0.75;
        const endY = height;

        return `
          M${startX} ${startY} 
          L${startX} ${endY} 
          L${endX} ${endY} 
          L${endX} ${startY}
        `;
      });

      return nodes.join(' ');
    }
  }, [width, height, stepWidth]);

  return (
    <Svg
      style={style}
      viewBox={`0 0 ${layout?.width || 1} ${layout?.height || 1}`}
      onLayout={onLayout}>
      <Defs>
        <Mask id={'progressMask'}>
          <Rect
            fill={'#fff'}
            x={0}
            y={0}
            height={height}
            width={(width / 100) * progress}
          />
        </Mask>
      </Defs>

      <Path d={path} fill={colors.brand} mask="url(#progressMask)" />
      <Path d={path} fill={hexToRgb(colors.brand, 0.1)} />
    </Svg>
  );
};

export default AudioTrack;
