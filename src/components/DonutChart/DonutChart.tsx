import React, {FC, useEffect, useMemo} from 'react';
import {InteractionManager, StyleProp, ViewStyle} from 'react-native';
import Animated, {
  Extrapolate,
  WithTimingConfig,
  interpolate,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Circle, Defs, G, Mask, Svg} from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type TDonutChartProps = {
  data: {
    value: number;
    color: string;
  }[];
  thickness: number;
  size: number;
  trackColor?: string;
  animated?: boolean;
  animationConfig?: WithTimingConfig;
  style?: StyleProp<ViewStyle>;
};

const DonutChart: FC<TDonutChartProps> = ({
  data,
  thickness,
  size,
  animated = true,
  trackColor,
  style,
  animationConfig,
}) => {
  const sharedValue = useSharedValue(animated ? 0 : 1);

  const center = size / 2;
  const radius = size / 2 - thickness / 2;
  const circleLength = 2 * Math.PI * radius;

  useEffect(() => {
    if (animated) {
      sharedValue.value = 0;
    }

    InteractionManager.runAfterInteractions(() => {
      sharedValue.value = withTiming(1, {
        duration: 400,
        ...animationConfig,
      });
    });
  }, []);

  const dataWithDasharrays = useMemo(() => {
    let segmentOffset = 0;
    const total = data.reduce((result, {value}) => result + value, 0);

    return data.map(({value, color}) => {
      const valuePercentage = (value / total) * 100;
      const segmentLength = (valuePercentage / 100) * circleLength;

      const segmentData = {
        color,
        dashArray: [
          0,
          segmentOffset,
          segmentLength,
          circleLength - segmentLength,
        ],
      };

      segmentOffset += segmentLength;

      return segmentData;
    });
  }, [data, circleLength]);

  const maskAnimatedProps = useAnimatedProps(() => {
    const dash = interpolate(
      sharedValue.value,
      [0, 1],
      [0, circleLength],
      Extrapolate.CLAMP,
    );
    const offset = circleLength - dash;

    return {
      strokeDasharray: [dash, offset],
    };
  }, [circleLength]);

  return (
    <Svg
      width={size}
      height={size}
      style={style}
      viewBox={`0 0 ${size} ${size}`}>
      <Defs>
        <Mask x={0} y={0} width={size} height={size} id="mask">
          <AnimatedCircle
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={thickness}
            stroke={'#fff'}
            origin={[center, center]}
            rotation={-90}
            animatedProps={maskAnimatedProps}
          />
        </Mask>
      </Defs>

      {!!trackColor && (
        <Circle
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={thickness}
          stroke={trackColor}
          fill={'transparent'}
        />
      )}

      <G mask="url(#mask)">
        {dataWithDasharrays.map(({color, dashArray}, index) => (
          <Circle
            key={index}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={thickness}
            stroke={color}
            strokeDasharray={dashArray}
            origin={[center, center]}
            rotation={-90}
            fill={'transparent'}
          />
        ))}
      </G>
    </Svg>
  );
};

export default DonutChart;
