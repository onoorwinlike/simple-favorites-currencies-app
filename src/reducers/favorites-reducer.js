import {
    CONFIRM_TO_ADD_TO_FAVORITE_LIST,
    SHOW_FAVORITES
} from '../actions/constants'

const initialState = {
    byCode: [],
    list: []
}

export default function favorites(state = initialState, action) {
    switch (action.type) {
        case CONFIRM_TO_ADD_TO_FAVORITE_LIST:
            return {
                ...state,
                byCode: [
                    ...action.ids
                ]
            }

        case SHOW_FAVORITES:
            return {
                ...state,
                byCode: action.favoritesByCode,
                list: action.favoritesList
            }

        default:
            return state
    }
}
