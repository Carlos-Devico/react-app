import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TodoButton from './TodoButton'
const Todo = ({ todo, toggleComplete, deleteTodo }) => (
    <View style={styles.todoContainer}>
        <Text style={styles.todoText}>
            {todo.title}
        </Text>
        <View style={styles.buttons}>
            <TodoButton
                name='Feito'
                complete={todo.complete}
                onPress={() => toggleComplete(todo.todoIndex)} />
            <TodoButton
                name='Deletar'
                onPress={() => deleteTodo(todo.todoIndex)} />
        </View>
    </View>
)
const styles = StyleSheet.create({
    todoContainer: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#848484',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: '#0c0c0c',
        paddingLeft: 14,
        paddingTop: 7,
        paddingBottom: 7,
        
        shadowRadius: 30,
        shadowColor: '#000000',
        shadowOffset: { width: 25, height: 29 },
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    todoText: {
        fontSize: 17,
        color:'#c9e41a',
        fontWeight:'900'
    }
})
export default Todo