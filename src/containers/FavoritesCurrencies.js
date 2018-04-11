import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Grid from 'material-ui/Grid'

import { selectCurrency, selectAllCurrencies } from '../actions'
import { showFavorites } from '../actions/favorites-actions'
import FavoritesTable from '../components/Favorites/Table'
import SimpleToolbar from '../components/common/SimpleToolbar'

class FavoritesCurrencies extends Component {
    constructor() {
        super( ...arguments )

        this.selectCurrency = this.selectCurrency.bind(this)
        this.selectAll = this.selectAll.bind(this)

    }

    componentDidMount() {
        this.props.dispatch( showFavorites(this.props.favorites.byCode) )
    }

    selectAll(event, currency) {
        this.props.dispatch( selectAllCurrencies(currency) )

    }

    selectCurrency(event, currency) {
        this.props.dispatch( selectCurrency(currency) )
    }

    render() {
        const { list, byCode, tableHeaders } = this.props.favorites

        return (
            <Grid container
                  direction='column'
                  justify='center'
                  alignItems='center'>
                {/*{ selectedCurrencies.length > 0  && <SimpleToolbar selected={ selectedCurrencies }*/}
                                                                   {/*confirmToAddToFavorites={ this.confirmToAddToFavorites } /> }*/}
                    <FavoritesTable headers={ tableHeaders }
                                     currencies={ list }
                                     selected={ byCode }
                                     onSelectAll={ this.selectAll }
                                     onSelect={ this.selectCurrency } />
            </Grid>
        )
    }
}

const mapStateToProps = state => ({ favorites: state.favorites })

export default connect( mapStateToProps )( FavoritesCurrencies )