import React from 'react'
import { Text, StyleSheet, ImageBackground } from 'react-native'

import background from '../../../assets/img/backgronund.png'

const CategoryListLayout = ({title, children}) => {
    return (
        <ImageBackground
            source={background}
            style={style.container}
        >
            <Text style={style.title}>{title}</Text>
            {children}
        </ImageBackground>
    )
}

const style = StyleSheet.create({
    container: {
        paddingVertical: 30,
        paddingHorizontal: 10,
    },
    title: {
        color: '#4c4c4c',
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
        marginLeft: 8,
    }
})

export default CategoryListLayout