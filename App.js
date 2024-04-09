import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import { add, subtract } from './RN-bundle.js';

const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState('');

  const handleAdd = () => {
    const sum = add(Number(num1), Number(num2));
    setResult(sum);
    setOperation('Add');
  };

  const handleSubtract = () => {
    const difference = subtract(Number(num1), Number(num2));
    setResult(difference);
    setOperation('Subtract');
  };

  return (
    <View style={styles.container}>
      <Text>번들 테스트</Text>
      <TextInput
        style={styles.input}
        value={num1}
        onChangeText={setNum1}
        placeholder="Enter number"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={num2}
        onChangeText={setNum2}
        placeholder="Enter number"
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <Button title="Add" onPress={handleAdd} />
        <Button title="Subtract" onPress={handleSubtract} />
      </View>
      {result !== null && (
        <Text style={styles.text}>
          Result of {operation} ({num1} and {num2}): {result}
        </Text>
      )}
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
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between',
    width: '60%',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default App;
