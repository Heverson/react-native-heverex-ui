import {
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ViewProps,
  View,
} from 'react-native';
import React from 'react';

interface HomeProps extends ViewProps {
  children?: React.ReactNode;
}

type Style = {
  container: ViewStyle;
  welcome: TextStyle;
};

export function Home({ children }: HomeProps) {
  return (
    <View style={styles.container}>
      {children ? children : <Text style={styles.welcome}>Page Home</Text>}
    </View>
  );
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eaf6fa',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
