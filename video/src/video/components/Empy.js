import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Empy = ({text}) => {
    return (
        <View style={style.container}>
            <Text style={style.text}>{text}</Text>
        </View>
    )
}  

const style = StyleSheet.create({
    container: {
        padding: 10,
    },
    text: {
        fontSize: 16
    }
})

export default Empy;