import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export const Screens2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titles}>El Jaguar</Text>
      <Text style={styles.Text}></Text>
      <Text style={styles.informacion}>
        El jaguar (Panthera onca) es el felino más grande de América y un
        símbolo importante de la biodiversidad del continente. Sin embargo, esta
        especie se encuentra en peligro de extinción, enfrentando una serie de
        amenazas que ponen en riesgo su supervivencia.
      </Text>
      <Text style={styles.titles}>Principales causas de la extinción:</Text>
      <Text style={styles.Text}>
        <Text style={styles.titles}>
          Pérdida y fragmentación de su hábitat:
        </Text>
        <Text style={styles.Text}>
          La deforestación, la expansión de la agricultura y la ganadería, y la
          construcción de infraestructuras como carreteras y represas, destruyen
          y fragmentan el hábitat natural del jaguar, reduciendo su espacio
          vital y dificultando su supervivencia.
        </Text>
        <Text style={styles.titles}>Caza furtiva:</Text>
        <Text style={styles.Text}>
        El jaguar es
          cazado por su piel, carne y huesos, principalmente para el mercado
          ilegal de fauna silvestre.
        </Text>
        <Text style={styles.titles}>Conflictos con humanos:</Text>
        <Text style={styles.Text}>
        En algunos casos,
          los jaguares son atacados por humanos por temor a su depredación o por
          la defensa de ganado.
        </Text>
        <Text style={styles.titles}>Comportamiento:</Text>
        Son animales solitarios y nocturnos. Durante el día, suelen esconderse
        entre la vegetación.
      </Text>
      <Text style={styles.titles}> Enfermedades</Text>
      <Text style={styles.Text}>
        <Text style={styles.Text}>
        Los jaguares son susceptibles a
          enfermedades transmitidas por perros domésticos, como la rabia y el
          moquillo.
        </Text>
      </Text>
      <Image
        source={{
          uri: 'https://efeverde.com/el-jaguar-en-peligro-critico-con-solo-64-000-ejemplares/',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    fontWeight: 'bold',
    margin: 10,
  },
  Text: {
    fontSize: 15,
    margin: 10,
  },
  titles: {
    fontSize: 20,
    margin: 10,
  },
  informacion: {
    fontSize: 15,
    margin: 10,
    textAlignVertical: 'top',
  },
});
