import React, { useState } from 'react';
import { StyleSheet, Text, TextInputComponent, TouchableOpacity, View } from 'react-native';

const Screen4 = () => {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  const handleComparacion = () => {
    if (numero1 >= numero2) {
      setResultado(`Números mayores o iguales a ${numero2}: ${numero1}`);
    } else {
      setResultado('Error: El primer número debe ser mayor o igual al segundo.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen 4</Text>
      <TextInputComponent
        onChangeText={setNumero1}
        value={numero1}
      />
      <TextInputComponent
        onChangeText={setNumero2}
        value={numero2}
      />
      <TouchableOpacity style={styles.button} onPress={handleComparacion}>
        <Text style={styles.text}>≥</Text>
      </TouchableOpacity>
      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  button: {
    backgroundColor: '#3D3B40',
    paddingVertical: 10,
    borderRadius: 10,
    width: 50,
    alignItems: 'center',
    margin: 10,
  },
  text: {
    color: '#F7F7F7',
    fontSize: 20,
    fontWeight: 'bold',
  },
  resultado: {
    fontSize: 18,
    margin: 10,
    color: '#3D3B40',
  },
});

export default Screen4;
