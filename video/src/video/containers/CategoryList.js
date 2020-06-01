import React from 'react'
import { View, FlatList } from 'react-native'

import Empy from '../components/Empy'
import Layout from '../components/CategoryLayout'
import HorizontalSeparator from '../components/HorizontalSeparator'
import Category from '../components/Category'
import { connect } from 'react-redux'

const CategoryList = ({ list }) => {
    return (
        <Layout
            title="Categorias">
            <FlatList
                horizontal
                keyExtractor={key}
                data={list}
                ListEmptyComponent={emptyList}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={Item}
            />
        </Layout>
    )
}

const key = (item) => item.id.toString()

const Item = ({ item }) => <Category key={item.id.toString()} {...item} />

const ItemSeparator = () => <HorizontalSeparator color='#00BFFF' />

const emptyList = () => <Empy text='No hay sigerencias' />

const mapStateToProps = (state) => {
    return {
        list: state.category
    }
} 

export default connect(mapStateToProps)(CategoryList)