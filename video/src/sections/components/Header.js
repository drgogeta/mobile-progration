import React from 'react'
import {
    View,
    Image,
    StyleSheet,
    SafeAreaView
} from 'react-native'
import logo from '../../../assets/img/logo.png'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Header = (props) => {
    return (
        <View>
            <SafeAreaView>
                <View style={styles.container}>
                    <Image
                        source={logo}
                        style={styles.logo}
                    />
                    <View>
                        {props.children}
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 26,
        resizeMode: 'contain',
    },
    container: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})

export default Header