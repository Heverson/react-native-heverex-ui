import { View, Text } from 'react-native';
import React, { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
}

export function Title({ children }: TitleProps) {
  return (
    <View>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{children}</Text>
    </View>
  );
}
