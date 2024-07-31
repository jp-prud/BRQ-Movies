import { Pressable } from 'react-native';

import { useAppTheme } from '@hooks';
import { ThemeColors } from '@theme';

import {
  ArrowReturnIcon,
  BulletIcon,
  CheckmarkAlertShield,
  CheckmarkIcon,
  ChevronIcon,
  CloseIcon,
  EyeIcon,
  EyeSlashIcon,
  FilterIcon,
  GearshapeIcon,
  HeartFillIcon,
  HeartIcon,
  HouseFillIcon,
  HouseIcon,
  PlusIcon,
} from '../../assets/icons';
import { Box } from '../Box/Box';

export interface IconBase {
  size?: number;
  color?: string;
  testID?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?(): void;
}

export function Icon({
  name,
  color = 'backgroundContrast',
  size,
  onPress,
}: IconProps) {
  const { colors } = useAppTheme();
  const SVGIcon = iconRegistry[name];

  const Icon = <SVGIcon color={colors[color]} size={size} />;

  if (onPress) {
    return (
      <Pressable testID="Icon" hitSlop={16} onPress={onPress} style={{}}>
        {Icon}
      </Pressable>
    );
  }

  return <Box testID="Icon">{Icon}</Box>;
}

const iconRegistry = {
  chevron: ChevronIcon,
  close: CloseIcon,
  plus: PlusIcon,
  gearshape: GearshapeIcon,
  house: HouseIcon,
  houseFill: HouseFillIcon,
  checkmark: CheckmarkIcon,
  checkmarkAlert: CheckmarkAlertShield,
  eye: EyeIcon,
  eyeSlash: EyeSlashIcon,
  filter: FilterIcon,
  heart: HeartIcon,
  heartFill: HeartFillIcon,
  bullet: BulletIcon,
  arrowReturn: ArrowReturnIcon,
};

type IconType = typeof iconRegistry;

export type IconName = keyof IconType;
