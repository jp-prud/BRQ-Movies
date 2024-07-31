import { useState } from 'react';

import { Box, TouchableOpacityBox } from '../Box/Box';
import { Text } from '../Text/Text';

interface TabsProps {
  initialTab?: number;
  tabs: {
    label: string;
    content: React.ReactNode;
  }[];
}

export function TabbedBox({ tabs, initialTab = 0 }: TabsProps) {
  const [selectedTab, setSelectedTab] = useState(initialTab);

  function handleTabPress(index: number) {
    setSelectedTab(index);
  }

  return (
    <Box flex={1}>
      <Box mb="s32" flexDirection="row" alignItems="center">
        {tabs.map((tab, index) => (
          <TouchableOpacityBox
            flex={1}
            key={tab.label}
            onPress={() => handleTabPress(index)}
            alignItems="center"
            height={44}
            borderColor={selectedTab === index ? 'primary' : 'gray'}
            borderBottomWidth={selectedTab === index ? 2 : 1}>
            <Text color={selectedTab === index ? 'primary' : 'gray'}>
              {tab.label}
            </Text>
          </TouchableOpacityBox>
        ))}
      </Box>

      <Box flex={1}>{tabs[selectedTab].content}</Box>
    </Box>
  );
}
