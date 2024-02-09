import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { IndexScreen } from '../screens/Inicio';

const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={IndexScreen} />
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
      <Stack.Screen name="Screen4" component={Screen4} />
    </Stack.Navigator>
  );
}

