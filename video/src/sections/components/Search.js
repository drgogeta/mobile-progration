import React, { useState } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import api from '../../utils/api'
import { setMovie } from '../../redux/actions'
import { connect } from 'react-redux'

const Search = ({dispatch}) => {
    const [text, SetText] = useState('')

    const handleSunmit = async () => {
        const moview = await api.searchMovie(text)
        setMovie(dispatch, moview)
    }

    const handleChange = (text) => {
        SetText(text)
    }

    return (
        <TextInput
            placeholder="Busca..."
            autoCorrect={false}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            onSubmitEditing={handleSunmit}
            onChangeText={handleChange}
            style={styles.input}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        fontSize: 15,
        borderWidth: 1,
        borderColor: '#eaeaea'
    }
})

export default connect()(Search)