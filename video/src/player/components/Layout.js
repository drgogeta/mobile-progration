import React from 'react'
import { View, StyleSheet } from 'react-native'

const Layout = ({video, loader, loading, controls}) => {
    return (
        <View style={style.container}>
            <View style={style.video}>
                {video}
            </View>
            <View style={style.overlay}>
                { loading && loader}
            </View>
            {controls}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        paddingTop: '56.25%',
    },
    video: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'black'
    },
    overlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Layout