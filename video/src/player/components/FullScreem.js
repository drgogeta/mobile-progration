import React from 'react'
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native'

import fullScreen from '../../../assets/img/fullScreen.svg'

const FullScreem = ({ fullScreem }) => {
    return (
        <TouchableHighlight
            onPress={fullScreem}
            style={styles.container}
        >
            <Image source={fullScreen} style={styles.button} />
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 20,
        height: 20
    },
    container: {
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        height: 25,
        width: 50,
        marginRight: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'gray',
    }
})


export default FullScreem