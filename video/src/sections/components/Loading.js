
import React from 'react';
import { View, StyleSheet, Image } from 'react-native'

import load from '../../../assets/img/load.gif'

const Loading = (props) => {
    return (
        <View style={styles.container}>
            <Image 
                source={load}
                style={styles.load}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center' 
    },
    load: {
        marginBottom: 10,
        width: 500,
        height: 200,
        resizeMode: 'contain'   
    }
})
export default Loading