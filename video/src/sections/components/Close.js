import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Close = ({ onPress }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={onPress}
        >
            <Text style={styles.close}>
                x
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        borderRadius: 12,
        width: 25,
        height: 25,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    close: {
        fontWeight: 'bold',
        color: 'white',
    },
})

export default Close