import React from 'react'
import PropTypes from 'prop-types'

import Table, { TableBody, TableHead, TableRow, TableCell } from 'material-ui/Table'
import Checkbox from 'material-ui/Checkbox'

import CurrenciesHeaders from './Headers'
import CurrenciesTableRow from './TableRow'

const CurrenciesTable = (
    { headers, currencies, onSelectAll, onSelect, selected }
) => (
    <Table>
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox indeterminate={ selected.length > 0 && selected.length < currencies.length }
                              checked={ selected.length === currencies.length }
                              onChange={ onSelectAll } />
                </TableCell>
                <CurrenciesHeaders headers={ headers } />
            </TableRow>
        </TableHead>
            <TableBody>
                <CurrenciesTableRow currencies={ currencies }
                                    selected={ selected }
                                    onSelect={ onSelect } />
            </TableBody>
    </Table>
)

CurrenciesTable.propTypes = {
    headers: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,

    currencies: PropTypes.arrayOf(
        PropTypes.shape({
            currency: PropTypes.string.isRequired,
            code: PropTypes.string.isRequired,
            mid: PropTypes.number.isRequired
        }).isRequired
    ).isRequired,

    onSelectAll: PropTypes.func.isRequired,

    onSelect: PropTypes.func.isRequired
}

export default CurrenciesTable