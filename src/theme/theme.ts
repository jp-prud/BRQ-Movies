import { ViewStyle } from 'react-native';

import { createTheme } from '@shopify/restyle';

export const palette = {
  primary: '#EC8B00',
  secondary: '#16171B',
  tertiary: '#2E2F33',
  white: '#FFFFFF',
  gray: '#A9A9A9',
  grayLight: '#fafafa',
  success: '#4ade80',
  error: '#f87171',
};

export const theme = createTheme({
  colors: {
    ...palette,
    primary: palette.primary,
    primaryContrast: palette.secondary,
    buttonPrimary: palette.primary,
    background: palette.secondary,
    backgroundContrast: palette.white,
    error: palette.error,
    success: palette.success,
  },
  spacing: {
    s0: 0,
    s2: 2,
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s28: 28,
    s32: 32,
    s36: 36,
    s40: 40,
    s42: 42,
    s48: 48,
    s56: 56,
    s64: 64,
    s68: 68,
  },
  borderRadii: {
    s2: 2,
    s4: 4,
    s8: 8,
    s12: 12,
    s16: 16,
    s24: 24,
    s32: 32,
  },
  textVariants: {
    defaults: {},
  },
});

export const $shadowProps: ViewStyle = {
  elevation: 10,
  shadowColor: '#000',
  shadowOpacity: 0.05,
  shadowRadius: 12,
  shadowOffset: { width: 0, height: -3 },
};

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
