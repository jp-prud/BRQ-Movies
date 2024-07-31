import React from 'react';

import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import { IconBase } from '@components';

export function HeartFillIcon({ color = 'white', size = 28 }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <G clip-path="url(#a)">
        <Path
          fill={color}
          d="M13.991 22.145c.229 0 .554-.168.818-.334 4.913-3.165 8.06-6.873 8.06-10.635 0-3.226-2.224-5.476-5.028-5.476-1.75 0-3.059.967-3.85 2.417C13.218 6.676 11.9 5.7 10.151 5.7c-2.804 0-5.037 2.25-5.037 5.476 0 3.762 3.147 7.47 8.06 10.635.272.166.598.334.817.334"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h28v28H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
