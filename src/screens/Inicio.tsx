import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StatusBar, View, Button, Text, StyleSheet } from 'react-native';

const PRIMARY_COLOR = '#007AFF';

interface Props extends StackScreenProps<any, any> {};

export const IndexScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <Text style={styles.title}>Inicio</Text>
      <View style={styles.buttonContainer}>
        <Button title="Imagen 1" onPress={() => navigation.navigate('Screen1')} />
        <Button title="Imagen 2" onPress={() => navigation.navigate('Screen2')} />
        <Button title="Formulario de Mayor o Igual" onPress={() => navigation.navigate('Screen3')} />
        <Button title="Formulario de Menor o Igual" onPress={() => navigation.navigate('Screen4')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#ddd',
    margin: 10,
    padding: 10,
  },
});

