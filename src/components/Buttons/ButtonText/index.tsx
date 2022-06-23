import React from 'react';
import { Text } from 'react-native';
import {
  BorderlessButton,
  BorderlessButtonProperties,
} from 'react-native-gesture-handler';

interface ButtonTextProps extends BorderlessButtonProperties {
  children?: React.ReactNode;
}
export function ButtonText({ children, ...rest }: ButtonTextProps) {
  return (
    <BorderlessButton {...rest}>
      <Text>{children}</Text>
    </BorderlessButton>
  );
}
