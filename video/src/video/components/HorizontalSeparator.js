import React from 'react'
import { View, StyleSheet } from 'react-native'
import SuggetionsListLayout from './SuggetionsListLayout'

const HorizontalSeparator = () => {
    return (
        <View
            style={style.separator}
        >

        </View>
    )
}

const style = StyleSheet.create({
    separator: {
        flex: 1,
        marginHorizontal: 5,
    }
})

export default HorizontalSeparator