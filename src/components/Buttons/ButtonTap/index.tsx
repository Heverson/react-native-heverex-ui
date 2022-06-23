import React from 'react';
import { Text } from 'react-native';
import { RectButtonProperties, RectButton } from 'react-native-gesture-handler';
import { styles } from './styles';

interface ButtonTapProps extends RectButtonProperties {
  children?: React.ReactNode;
}
export function ButtonTap({ children, ...rest }: ButtonTapProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <Text style={styles.textButton}>{children}</Text>
    </RectButton>
  );
}
