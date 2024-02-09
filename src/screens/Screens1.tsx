import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export const Screens1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titles}>El Alojote</Text>
      <Text style={styles.Text}></Text>
        <Text style={styles.informacion}>El ajolote (Ambystoma mexicanum) es un anfibio endémico de México, lo
        que significa que solo se encuentra en este país. Su nombre proviene del
        náhuatl "āxolotl", que significa "monstruo de agua".
      </Text>
      <Text style={styles.titles}>Caracteristicas</Text>
      <Text style={styles.Text}>
        <Text style={styles.titles}>Apariencia:</Text>
         <Text style={styles.Text}>Es un anfibio de cuerpo alargado y robusto, con una cabeza
        grande y ancha. Posee ojos saltones y una boca grande con dientes
        pequeños. Su piel es lisa y húmeda, y puede ser de color marrón, negro o
        albino.
        </Text>
        <Text style={styles.titles}>Tamaño:</Text>
        <Text style={styles.Text}>Los ajolotes adultos pueden medir entre 20 y 30 cm de
        largo, aunque algunos ejemplares pueden llegar a alcanzar hasta 40 cm.
        Hábitat: Habitan en lagos, canales y ríos de aguas tranquilas y limpias.
        Prefieren zonas con vegetación densa y poca profundidad.
        </Text>
        <Text style={styles.titles}>Alimentacion:</Text>
        <Text style={styles.Text}>Son carnívoros y se alimentan de pequeños animales acuáticos como larvas
        de insectos, crustáceos, gusanos y peces. Reproducción: Se reproducen
        sexualmente y las hembras pueden poner hasta 1.000 huevos por año. Los
        huevos eclosionan en unos 15 días y las larvas se metamorfosean en
        adultos en unos 6 meses.
        </Text>
        <Text style={styles.titles}>Comportamiento:</Text>
        Son animales solitarios y
        nocturnos. Durante el día, suelen esconderse entre la vegetación.
      </Text>
      <Text style={styles.titles}>Importancia</Text>
      <Text style={styles.Text}>
        <Text style={styles.Text}>El ajolote es una especie importante para el ecosistema
        mexicano, ya que ayuda a controlar las poblaciones de otros animales
        acuáticos. Además, es un modelo de estudio muy importante para la
        investigación científica en áreas como la regeneración celular y la
        biomedicina.
        </Text>
      </Text>
      <Image source={{uri: 'https://nattal.pe/wp-content/uploads/2023/07/ajolote.jpg.webp'}} />
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
    }
  });
  