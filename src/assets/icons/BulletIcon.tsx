import React from 'react';

import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import { IconBase } from '@components';

export function BulletIcon({ color = 'white', size = 28 }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <G clip-path="url(#a)">
        <Path
          fill={color}
          fill-rule="evenodd"
          d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-2 8c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2"
          clip-rule="evenodd"
        />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
