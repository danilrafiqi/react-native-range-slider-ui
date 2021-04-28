import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RangeSliderUi from 'react-native-range-slider-ui';

export default function App() {
  const [result, setResult] = React.useState();

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <RangeSliderUi values={[1, 90]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
