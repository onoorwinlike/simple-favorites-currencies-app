import API from '../api/APIGenerator'
import {
    FETCH_CURRENCIES_BEGIN,
    FETCH_CURRENCIES_SUCCESS,
    FETCH_CURRENCIES_FAILURE,
    SELECT_CURRENCY,
    DESELECT_CURRENCY,
    SELECT_ALL_CURRENCY,
    DESELECT_ALL_CURRENCY
} from './constants'

import { isElementInArrayFound } from '../common/helpers'

export const fetchCurrenciesBegin = () => ({
    type: FETCH_CURRENCIES_BEGIN
})

export const fetchCurrenciesSuccess = currencies => ({
    type: FETCH_CURRENCIES_SUCCESS,
    tableHeaders: Object.keys( currencies[0] ),
    currenciesByCode: currencies.reduce((currencies, currency) => ({ ...currencies, [currency.code]: currency }), {}),
    currenciesList: currencies
})

export const fetchCurrenciesError = error => ({
    type: FETCH_CURRENCIES_FAILURE,
    error
})

export const fetchCurrencies = () => dispatch => {
    dispatch(fetchCurrenciesBegin())

    const dispatchSuccessFetch = data => {
        dispatch(fetchCurrenciesSuccess(data))
        return data
    }

    const dispatchFailFetch = error => dispatch(fetchCurrenciesError(error))

    return new API()
        .exchangerates()
        .tables()
        .A()
        .generateAPI()
        .GET()
        .then(dispatchSuccessFetch)
        .catch(dispatchFailFetch)
}

const whenCurrencyWasSelected = id => ({
    type: SELECT_CURRENCY,
    id
})

const whenCurrencyWasDeselected = id => ({
    type: DESELECT_CURRENCY,
    id
})

export const selectCurrency = id => (dispatch, getState) => {
    // if (getState().selectedCurrencies.indexOf(id) > -1) {
    //     return dispatch(whenCurrencyWasDeselected(id))
    // }

    const { selectedCurrencies } = getState()

    if (isElementInArrayFound(selectedCurrencies, id)) {
        return dispatch(whenCurrencyWasDeselected(id))
    }

    return dispatch(whenCurrencyWasSelected(id))
}

const whenCurrencyWasAllSelected = currencies => ({
    type: SELECT_ALL_CURRENCY,
    currencies
})

const whenCurrencyWasAllDeselected = () => ({
    type: DESELECT_ALL_CURRENCY,
})

export const selectAllCurrencies = areSelectedAll => (dispatch, getState) => {

    if (areSelectedAll) {
        const currencies = getState()
            .currencies
            .list
            .map(currency => currency.code)

        return dispatch(whenCurrencyWasAllSelected(currencies))
    }

    return dispatch(whenCurrencyWasAllDeselected())
}