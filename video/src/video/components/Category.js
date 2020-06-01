import React from 'react'
import { View, Text, ImageBackground, StyleSheet } from "react-native"

const Category = (props) => {
    const {genres, background_image} = props
    return (
        <ImageBackground
            style={style.wrapper}
            source={{
                uri: background_image
            }}
        >
            {genres.map(genre => <Text key={genre} style={style.genre}> {genre} </Text>)}
        </ImageBackground>
    )
} 
const style = StyleSheet.create({
    wrapper: {
        width: 250,
        height: 100,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    genre: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, .75)',
        textShadowOffset: {
            width: 2,
            height: 2
        },
        textShadowRadius: 2
    }
})

export default Category