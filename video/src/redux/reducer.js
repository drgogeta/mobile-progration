import { SET_CATEGORY_LIST, SET_MOVIES_LIST, SET_MOVIE } from "./actions";


const videos = (state = {}, action) => {
    switch (action.type) {
        case SET_MOVIES_LIST:
            return { ...state, ...action.payload }
        case SET_CATEGORY_LIST:
            return { ...state, ...action.payload }
        case SET_MOVIE:
            return { ...state, movie: action.payload.movie }
        default:
            return state
    }
}

export default videos