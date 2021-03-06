import {
    DESELECT_ALL_CURRENCY,
    DESELECT_CURRENCY,
    SELECT_ALL_CURRENCY,
    SELECT_CURRENCY
} from '../actions/constants'

export default function selectedCurrencies(state = [], action) {
    switch (action.type) {
        case SELECT_CURRENCY:
            return [
                ...state,
                action.id
            ]

        case DESELECT_CURRENCY:
            return [ ...state ]
                .filter( id => id !== action.id )

        case SELECT_ALL_CURRENCY:
            return [ ...action.currencies ]

        case DESELECT_ALL_CURRENCY:
            return []

        default:
            return state
    }
}
