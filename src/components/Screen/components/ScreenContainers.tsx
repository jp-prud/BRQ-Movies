import { ScrollView } from 'react-native';
import { Box } from '../../Box/Box';
interface BaseView {
  children: React.ReactNode;
  backgroundColor: string;
}

export function ScrollableViewContainer({
  backgroundColor,
  children,
}: BaseView) {
  return (
    <ScrollView 
      keyboardShouldPersistTaps="handled" 
      style={{ backgroundColor, flex: 1 }}
    >
      {children}
    </ScrollView>
  );
}

export function ViewContainer({ backgroundColor, children }: BaseView) {
  return (
    <Box
      style={{ backgroundColor, flex: 1 }}
    >
      {children}
    </Box>
  )
}
