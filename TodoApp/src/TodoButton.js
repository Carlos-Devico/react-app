import React from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';

// Componente TodoButton
const TodoButton = ({ onPress, complete, name }) => (
  // Componente TouchableHighlight que torna o botão pressionável
  <TouchableHighlight
    onPress={onPress}
    underlayColor='#efefef'
    style={styles.button}
  >
    {/* Componente Text que exibe o texto do botão */}
    <Text
      style={[
        styles.text,
        complete ? styles.complete : null,
        name === 'Deletar' ? styles.deleteButton : null,
      ]}
    >
      {name}
    </Text>
  </TouchableHighlight>
);

// Estilos do componente
const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    padding: 7,
    borderColor: '#c9e41a',
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 5,
  },
  text: {
    color: '#666666',
  },
  complete: {
    color: 'green',
    fontWeight: 'bold',
  },
  deleteButton: {
    color: 'rgba(175, 15, 15, 1)',
  },
});

export default TodoButton;
