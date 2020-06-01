import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

const Suggetions = (props) => {
    const { title, medium_cover_image, year, rating, genres, onPress } = props
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <View style={style.container}>
                <View style={style.preview}>
                    <Image
                        style={style.cover}
                        source={{
                            uri: medium_cover_image
                        }}
                    />
                    <View style={style.genereContainer}>
                        <Text style={style.generetext}>
                            {genres[0]}
                        </Text>
                    </View>
                </View>
                <View style={style.content}>
                    <Text style={style.title}>
                        {title}
                    </Text>
                    <Text style={style.year}>
                        {year}
                    </Text>
                    <Text style={style.rating}>
                        {rating}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    preview: {

    },
    content: {
        paddingLeft: 10,
        justifyContent: 'space-between'
    },
    cover: {
        height: 150,
        width: 100,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 18,
        color: '#44546B'
    },
    year: {
        backgroundColor: '#70B124',
        paddingVertical: 4,
        color: 'white',
        fontSize: 11,
        borderRadius: 5,
        overflow: 'hidden',
        alignSelf: 'flex-start',
    },
    rating: {
        color: '#6b6b6b',
        fontSize: 14,
        fontWeight: 'bold',
    },
    genereContainer: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'black',
        paddingHorizontal: 5,
        paddingVertical: 7,
    },
    generetext: {
        color: 'white',
        fontSize: 11
    }
})

export default Suggetions