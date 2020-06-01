import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const VerticalSeparator = ({color}) => {
    return (
        <View style={[
            style.separator,
            {
                borderTopColor: (color) ? color : '#4B0082'
            }
            ]}>
            <Text> Esto es un separador </Text>
        </View>
    )
}

const style = StyleSheet.create({
    separator: {
        borderTopWidth: 1,
    }
})

export default VerticalSeparator