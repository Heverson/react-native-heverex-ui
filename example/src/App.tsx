import * as React from 'react';
import { Alert, StyleSheet, View } from 'react-native';

import {
  Button,
  ButtonTap,
  ButtonText,
  Home,
  InputText,
} from 'react-native-heverex-ui';

export default function App() {
  return (
    <Home>
      <View style={styles.row}>
        <Button onPress={() => Alert.alert('👋≧◉ᴥ◉≦ Welcome UI Kit Heverex')}>
          Your Button 👋≧◉ᴥ◉≦
        </Button>
      </View>
      <View style={styles.row}>
        <ButtonTap
          onPress={() => Alert.alert('👋≧◉ᴥ◉≦ Welcome UI Kit Heverex')}
        >
          Your Button Tap
        </ButtonTap>
      </View>
      <InputText placeholder="Escreva aqui" />
      <View style={styles.row}>
        <ButtonText
          onPress={() => Alert.alert('👋≧◉ᴥ◉≦ Welcome UI Kit Heverex')}
        >
          Your Button
        </ButtonText>
      </View>
    </Home>
  );
}

const styles = StyleSheet.create({
  row: {
    margin: 10,
  },
});
