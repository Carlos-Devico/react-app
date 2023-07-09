import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Text} from 'react-native'
import Heading from './src/Heading'
import Input from './components/Input'
import Button from './components/Button'
import TodoList from './src/TodoList'
import TabBar from './src/TarBar'

let todoIndex = 0

class App extends Component {
    // Define a classe App como um componente React com estado
    constructor() {
        super()
        // Inicializa o estado do componente
        this.state = {
            inputValue: '', // texto será usado para adicionar novas tarefas à lista.
            todos: [], // array armazenará as tarefas
            type: 'Tudo' // tipo de tarefa que está sendo visualizada no momento.
        }
        // Vincula os métodos de classe ao contexto atual do componente
        this.toggleComplete = this.toggleComplete.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.setType = this.setType.bind(this)
        this.submitTodo = this.submitTodo.bind(this)
    }

    // Método para excluir uma tarefa com base no índice
    deleteTodo(todoIndex) {
        let { todos } = this.state
        // Filtra as tarefas para manter apenas aquelas com índice diferente do índice fornecido
        todos = todos.filter((todo) => todo.todoIndex !== todoIndex)
        // Atualiza o estado com as tarefas filtradas
        this.setState({ todos })
    }

    setType(type) {
        this.setState({ type })
    }

    // Método para alternar o status de conclusão de uma tarefa com base no índice
    toggleComplete(todoIndex) {
        let todos = this.state.todos
        todos.forEach((todo) => {
            // Se o índice da tarefa corresponder ao índice fornecido, altera o status de conclusão
            if (todo.todoIndex === todoIndex) {
                todo.complete = !todo.complete
            }
        })
        // Atualiza o estado com as tarefas atualizadas
        this.setState({ todos })
    }

    // Método para atualizar o estado com o valor do campo de entrada
    inputChange(inputValue) {
        console.log('Entrada: ', inputValue)
        // Atualiza o estado com o novo valor do campo de entrada
        this.setState({ inputValue })
    }

    // Método para adicionar uma nova tarefa
    submitTodo() {
        if (this.state.inputValue.match(/^\s*$/)) { //A expressão regular /^\s*$/ verifica se a string é vazia ou contém apenas espaços em branco.
            return
        } //Se o valor do campo de entrada atender a essa condição, o fluxo do código é interrompido e a função retorna, sem executar o restante do código.
        const todo = {
            title: this.state.inputValue,
            todoIndex,
            complete: false
        }

        todoIndex++ // Incrementa o índice da tarefa
        const todos = [...this.state.todos, todo] // Adiciona a nova tarefa ao array existente de tarefas (todos).
        // Atualiza o estado com as tarefas atualizadas e redefine o valor do campo de entrada
        this.setState({ todos, inputValue: '' }, () => {
            // Após atualizar o estado, registra o estado atual para garantir que tudo esteja funcionando corretamente
            console.log('Estado: ', this.state)
        })
    }

    render() {
        const { todos, inputValue, type } = this.state
        return (
            <View style={styles.container}>
                <ScrollView
                    keyboardShouldPersistTaps='always'
                    style={styles.content}>
                    <Heading />
                    <Text style={styles.text}>Carl' TODO</Text>
                    <Input inputValue={inputValue}
                        inputChange={(text) => this.inputChange(text)} />
                    <TodoList
                        type={type}
                        toggleComplete={this.toggleComplete}
                        deleteTodo={this.deleteTodo}
                        todos={todos} />
                    <Button submitTodo={this.submitTodo} />
                </ScrollView>
                <TabBar type={type} setType={this.setType} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#641dde',
    
        padding:10
    },
    content: {
        flex: 1,
        paddingTop: 60,
     
   
    },
    text: {
        textAlign:'center',
        fontWeight: 'bold',
    fontSize: 40,
    color: "#888",
        marginVertical: 10,
    }
})





export default App



















































