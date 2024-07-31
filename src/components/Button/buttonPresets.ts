import { ThemeColors } from '../../theme/theme';
import { TouchableOpacityBoxProps } from '../Box/Box';

export type ButtonPreset = 'primary' | 'secondary' | 'ghost';

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
  icon?: ThemeColors;
}

export const buttonPresets: Record<
  ButtonPreset,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'primary',
      },
      content: 'backgroundContrast',
      icon: 'backgroundContrast',
    },
    disabled: {
      container: {
        backgroundColor: 'gray',
      },
      content: 'secondary',
      icon: 'secondary',
    },
  },
  secondary: {
    default: {
      container: {
        backgroundColor: 'white',
      },
      content: 'primary',
      icon: 'primary',
    },
    disabled: {
      container: {
        backgroundColor: 'white',
      },
      content: 'white',
      icon: 'white',
    },
  },
  ghost: {
    default: {
      container: {
        backgroundColor: 'background',
      },
      content: 'white',
      icon: 'white',
    },
    disabled: {
      container: {
        backgroundColor: 'gray',
      },
      content: 'secondary',
      icon: 'secondary',
    },
  },
};
