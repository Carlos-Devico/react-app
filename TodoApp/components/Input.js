import React, { useRef } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ inputValue, inputChange }) => {
    const inputRef = useRef(null);

    const handleInputChange = (text) => {
        inputChange(text);
    };

    const handleSubmitEditing = () => {
        // Limpar o campo de entrada
        inputRef.current.clear();
        // Dar foco novamente ao campo de entrada
        inputRef.current.focus();
    };

    return (
        <TextInput
            ref={inputRef}
            value={inputValue}
            onChangeText={handleInputChange}
            onSubmitEditing={handleSubmitEditing}
            placeholder="Digite uma tarefa..."
            style={styles.input}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        backgroundColor: '#c9e41a',
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
        marginTop: 5,
        fontWeight: '900'
    },
});

export default Input;
