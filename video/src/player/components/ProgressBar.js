import React from 'react'
import { StyleSheet, View } from "react-native"


const ProgressBar = ({progress}) => {
    return (
        <View style={styles.contentBar}>
            <View style={[styles.barIndicator, {
                width: `${progress || 0}%`
            }]}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentBar:{
        width:'60%',
        height:5,
        backgroundColor:'#FFFFFF',
        borderRadius:15,
        marginHorizontal:3,
      },
      barIndicator:{
        height:5,
        borderRadius:15,
        backgroundColor:'black'
      }
})

export default ProgressBar