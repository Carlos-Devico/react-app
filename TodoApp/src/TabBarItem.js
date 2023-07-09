import React from 'react'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'
const TabBarItem = ({ border, title, selected, setType, type }) => (
    <TouchableHighlight
        underlayColor='#1d289c'
        onPress={setType}
        style={[
            styles.item, selected ? styles.selected : null,
            border ? styles.border : null,
            type === title ? styles.selected : null]}>
        <Text style={[styles.itemText, type === title ? styles.bold : null]}>
            {title}
        </Text>
    </TouchableHighlight>
)
const styles = StyleSheet.create({
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    border: {
        borderLeftWidth: 5,
        borderLeftColor: '#a5c2a5'
    },
    itemText: {
        color: '#c9e41a',
        fontSize: 16,
        fontWeight:'900',
    },
    selected: {
        backgroundColor: '#0aad9d',
        color: '#BDBDBD'
        
    },
    bold: {
        fontWeight: 'bold'
    }
})
export default TabBarItem