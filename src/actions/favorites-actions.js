import {
    CONFIRM_TO_ADD_TO_FAVORITE_LIST,
    SHOW_FAVORITES
} from './constants'

export const confirmToAddToFavorites = ids => ({
    type: CONFIRM_TO_ADD_TO_FAVORITE_LIST,
    ids
})

export const showFavorites = ids => (dispatch, getState) => {

    if (!ids) return

    const { currencies } = getState()
    const favoritesList = ids.map(id => currencies.byCode[ id ])

    return dispatch({
        type: SHOW_FAVORITES,
        favoritesByCode: ids,
        favoritesList: favoritesList
    })
}