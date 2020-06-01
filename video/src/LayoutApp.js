import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Home from './screens/containers/Home'
import Header from './sections/components/Header'
import CategoryList from './video/containers/CategoryList'
import SuggetionsList from './video/containers/SuggetionsList'

import Api from './utils/api';
import * as actions from './redux/actions';
import Movie from './screens/containers/Movie';

const LayoutApp = ({dispatch, movie}) => {

    useEffect(() => {
        (async () => {
            const movies = await Api.getSuggestion()
            actions.setMovies(dispatch, movies)
            const category = await Api.getMovies()
            actions.setCategory(dispatch, category)
        })();
    }, []);

    return (
        <Home >
            {movie 
            ?<>
                <Movie />
             </>
            :<>
               <Header />
                <CategoryList />
                <SuggetionsList />
             </>
            }
        </Home >
    )
}

const mapStateToProps = (state) => {
    return {
        movie: state.movie,
    }
}

export default connect(mapStateToProps)(LayoutApp)