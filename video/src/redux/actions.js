export const SET_MOVIES_LIST = 'SET_MOVIES_LIST'
export const SET_MOVIE = 'SET_MOVIE'
export const SET_CATEGORY_LIST = 'SET_CATEGORY_LIST'

export const setMovies = (dispatch, movies) => {
    dispatch({
        type: SET_MOVIES_LIST,
        payload: {
            movies
        }
    })
} 

export const setCategory = (dispatch, category) => {
    dispatch({
        type: SET_CATEGORY_LIST,
        payload: {
            category
        }
    })
} 

export const setMovie = (dispatch, item) => {
    dispatch({
        type: SET_MOVIE,
        payload: {
            movie: item
        }
    })
} 
