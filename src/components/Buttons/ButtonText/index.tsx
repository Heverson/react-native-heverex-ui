import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface ButtonTextProps extends TouchableOpacityProps {
  children?: React.ReactNode;
}
export function ButtonText({ children, ...rest }: ButtonTextProps) {
  return (
    <TouchableOpacity {...rest}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
}
