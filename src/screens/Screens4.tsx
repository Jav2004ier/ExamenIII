import { SetStateAction, useState } from "react";
import { TextInputComponent } from "react-native";

const MyComponent = () => {
  const [texto, setTexto] = useState('');

  const handleChangeText = (nuevoTexto: SetStateAction<string>) => {
    setTexto(nuevoTexto);
  };

  return (
    <TextInputComponent
      onChangeText={handleChangeText}
      value={texto}
    />
  );
};
