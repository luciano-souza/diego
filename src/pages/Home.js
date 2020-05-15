import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Home({navigation}) {
  return (
    <View>
      <Text>Página Home</Text>
      <Button title="Página 1" onPress={() => navigation.navigate('Pagina1')} />
      <Button title="Página 2" onPress={() => navigation.navigate('Pagina2')} />
    </View>
  );
}
