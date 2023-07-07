import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Heading from './components/Heading'
import Input from './components/Input'
import Button from './components/Button'

let todoIndex = 0

class App extends Component {

    constructor() {
        super()
        this.state = {
            inputValue: '', // texto será usado para adicionar novas tarefas à lista.
            todos: [], // array armazenara as tarefa
            
            type: 'All' // tipo de tarefa que está sendo visualizada no momento.
        }
        this.submitTodo = this.submitTodo.bind(this)
    }

    inputChange(inputValue){ // metodo que recebe inputValue como argumento
        console.log('Entrada: ', inputValue);
        this.setState({ inputValue }) // connfigura o estado com o novo valor
    }

    submitTodo () {
        if (this.state.inputValue.match(/^\s*$/)){
            return
        }
        const todo = {
            title: this.state.inputValue,
            todoIndex,
            complete: false
        }
        todoIndex++ //incrementa o todoIndex
        const todos = [...this.state.todos, todo] // Adiciona a nova tarefa ao array existente de tarefas (todos).
        this.setState({ todos, inputValue: ''}, () => { // Define o estado dos todos para corresponder
                                                       // ao array atualizado this.state.todos e redefine o inputValue para uma string vazia.

            console.log('Estado: ', this.state); // Uma vez que o estado é definido, você tem a opção de passar 
                                                 // uma função de retorno (callback). Neste caso, uma função de 
                                                 //retorno de setState registra o estado para garantir que tudo esteja funcionando corretamente.
        })
    }
    render() {
        const { inputValue } = this.state
        return (
            <View style={styles.container}>
                <ScrollView keyboardShouldPersistTaps='always'
                    style={styles.content}>
                    <Heading />
                    <Input 
                        inputValue = { inputValue }
                        inputChange = { (text) => this.inputChange(text) } // Passa inputChange como uma propriedade para o componente Input
                    />
                    <Button submitTodo={this.submitTodo} />
                    
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    content: {
        flex: 1,
        paddingTop: 60
    }
})
export default App