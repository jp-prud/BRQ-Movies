import {
  Icon,
  IconName,
  Text,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components';

export interface ScreenTabBarButtonProps {
  label?: string;
  icon: {
    focused: IconName;
    unfocused: IconName;
  };
  focused?: boolean;
}

export function ScreenTabBarButton({
  icon,
  label,
  focused,
  ...touchableOpacityBoxProps
}: ScreenTabBarButtonProps & TouchableOpacityBoxProps) {
  return (
    <TouchableOpacityBox
      alignItems="center"
      justifyContent="center"
      gap="s4"
      {...touchableOpacityBoxProps}>
      <Icon
        name={focused ? icon.unfocused : icon.focused}
        color={focused ? 'primary' : 'white'}
      />
      <Text color={focused ? 'primary' : 'white'} semiBold>
        {label}
      </Text>
    </TouchableOpacityBox>
  );
}
