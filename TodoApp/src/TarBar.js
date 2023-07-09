import React from 'react'
import { View, StyleSheet } from 'react-native'
import TabBarItem from "./TabBarItem";


const TabBar = ({ setType, type }) => (
    <View style={styles.container}>
        <TabBarItem type={type} title='Tudo'
            setType={() => setType('Tudo')} />
        <TabBarItem type={type} border title='Ativo'
            setType={() => setType('Ativo')} />
        <TabBarItem type={type} border title='Completo'
            setType={() => setType('Completo')} />
    </View>
)
const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#18ca7d'
    }
})
export default TabBar