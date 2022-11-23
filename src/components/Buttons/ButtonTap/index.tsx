import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';

interface ButtonTapProps extends TouchableOpacityProps {
  children?: React.ReactNode;
}
export function ButtonTap({ children, ...rest }: ButtonTapProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Text style={styles.textButton}>{children}</Text>
    </TouchableOpacity>
  );
}
