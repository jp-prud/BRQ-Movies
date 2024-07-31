import React from 'react';

import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

import { IconBase } from '@components';

export function ArrowReturnIcon({ color = 'white', size = 28 }: IconBase) {
  return (
    <Svg width={size} height={size} fill="none">
      <G clip-path="url(#a)">
        <Path
          fill={color}
          d="M5.58 17.02c0 3.507 2.303 5.819 6.232 5.819h2.109c.571 0 .976-.43.976-.958a.95.95 0 0 0-.976-.967h-2.048c-2.83 0-4.394-1.679-4.394-3.973 0-2.285 1.564-3.893 4.394-3.893h5.599l2.03-.088-1.547 1.3-2.259 2.207a.9.9 0 0 0-.281.668c0 .545.378.94.94.94.247 0 .51-.114.695-.299l5.054-4.974a.98.98 0 0 0 0-1.424L17.05 6.403a1.02 1.02 0 0 0-.695-.299c-.562 0-.94.396-.94.932 0 .29.106.501.281.668l2.26 2.206 1.546 1.31-2.03-.088h-5.546c-3.99 0-6.346 2.4-6.346 5.888"
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
