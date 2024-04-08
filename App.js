import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {add, subtract} from './RN-bundle.js';
const App = () => {
  const addResult = add(1, 1);
  const subtractResult = subtract(4, 2);

  return (
    <View style={styles.container}>
      <Text>번들 테스트</Text>
      <Text style={styles.text}>add(1, 1): {addResult}</Text>
      <Text style={styles.text}>subtract(4, 2): {subtractResult}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;
