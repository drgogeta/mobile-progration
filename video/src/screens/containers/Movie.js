import React from 'react'

import { connect } from 'react-redux'

import LayoutMovie from '../components/LayoutMovie'
import Player from '../../player/containers/Player'
import Header from '../../sections/components/Header'
import Close from '../../sections/components/Close'
import { setMovie } from '../../redux/actions'
import Details from '../../player/components/Details'

const Movie = ({dispatch, movie}) => {

    const closeVideo = () => setMovie(dispatch, null)

    return (
        <LayoutMovie>
            <Header>
                <Close onPress={closeVideo}/>
            </Header>
            <Player />
            <Details {...movie}/>
        </LayoutMovie>   
    )
}
const mapStateToProps = (state) => {
    return {
        movie: state.movie,
    }
} 
export default connect(mapStateToProps)(Movie)