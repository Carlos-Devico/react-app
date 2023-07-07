import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Heading from './components/Heading'
class App extends Component {

    constructor() {
        super()
        this.state = {
            inputValue: '', // texto será usado para adicionar novas tarefas à lista.
            todos: [], // array armazenara as tarefa
            
            type: 'All' // tipo de tarefa que está sendo visualizada no momento.
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView keyboardShouldPersistTaps='always'
                    style={styles.content}>
                    <Heading />
                    
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