import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SuggetionsListLayout = ({title, children}) => {
    return (
        <View style={style.container}>
            <Text style={style.title}>{title}</Text>
            {children}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        paddingVertical: 10,
        flex: 1 
    },
    title: {
        color: '#4c4c4c',
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
        marginLeft: 8,
    }
})

export default SuggetionsListLayout