import { StyleSheet, Text, View } from 'react-native';

import * as ReactNativeFastInput from 'react-native-fast-input';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ReactNativeFastInput.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
