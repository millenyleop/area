import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Picker } from 'react-native';

export default function App() {
 const [number1, setNumber1] = useState('');
 const [number2, setNumber2] = useState('');
 const [result, setResult] = useState(null);
 const [shape, setShape] = useState('square'); 

 const handleCalculate = () => {
    let area = 0;
    if (shape === 'square') {
      //quadrado
      area = parseFloat(number1) * parseFloat(number1);
    } else if (shape === 'triangle') {
      //triângulo
      area = (parseFloat(number1) * parseFloat(number2)) / 2;
    }
    setResult(area);
 };

 return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Áreas em React Native</Text>
      <Picker
        selectedValue={shape}
        style={styles.picker}
        onValueChange={(itemValue) => setShape(itemValue)}
      >
        <Picker.Item label="Quadrado" value="square" />
        <Picker.Item label="Triângulo" value="triangle" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor da base"
        onChangeText={(text) => setNumber1(text)}
        keyboardType="numeric"
        value={number1}
      />
      {shape === 'triangle' && (
        <TextInput
          style={styles.input}
          placeholder="Digite a altura"
          onChangeText={(text) => setNumber2(text)}
          keyboardType="numeric"
          value={number2}
        />
      )}
      <Button title="Calcular" onPress={handleCalculate} />
      {result !== null && <Text style={styles.result}>Resultado: {result}</Text>}
    </View>
 );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
 },
 title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
 },
 input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
 },
 picker: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
 },
 result: {
    marginTop: 20,
    fontSize: 18,
 },
});