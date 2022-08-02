import React from 'react';
import Svg, {Path} from 'react-native-svg';

const HeartIcon = ({
  width = 44,
  height = 44,
  stroke = '#000',
  fill = 'red',
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke={stroke}
      fill={fill}
      stroke-linecap="round"
      stroke-linejoin="round">
      <Path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
    </Svg>
  );
};

export default HeartIcon;
