import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface ButtonProps extends TouchableOpacity {
  children: React.ReactNode;
}
export function Button({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity {...rest}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
}
