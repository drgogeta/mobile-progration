import React from "react";
import { FlatList } from "react-native";
import { connect } from "react-redux";

import Layout from "../components/SuggetionsListLayout";
import Empy from "../components/Empy";
import VerticalSeparator from "../components/VerticalSeparator";
import Suggetions from "../components/Sugetions";
import * as actions from "../../redux/actions";



const SuggestionList = ({ list, dispatch }) => {

  const Item = ({ item }) =>
    <Suggetions
      onPress={() => actions.setMovie(dispatch, item)}
      {...item}
    />
  const key = (item) => item.id.toString()


  const ItemSeparator = () => <VerticalSeparator color='#00BFFF' />

  const emptyList = () => <Empy text='No hay sigerencias' />

  return (
    <Layout
      title="Sugerencias para ti"
    >
      <FlatList
        keyExtractor={key}
        data={list}
        ListEmptyComponent={emptyList}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={Item}
      />
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return {
    list: state.movies
  }
}

export default connect(mapStateToProps)(SuggestionList)