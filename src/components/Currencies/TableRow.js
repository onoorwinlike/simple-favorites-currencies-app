import React from 'react'
import { TableCell, TableRow } from 'material-ui/Table'
import Checkbox from 'material-ui/Checkbox'

const CurrenciesTableRow = ({ currencies, onSelect, selected }) => (
    currencies.map((currency, index) =>
        <TableRow key={ index }
                  hover
                  role='checkbox'
                  onClick={ () => onSelect(currency.code) }>
            <TableCell padding="checkbox">
                <Checkbox checked={ selected.indexOf( currency.code ) !== -1 } />
            </TableCell>
            <TableCell>{ currency.currency }</TableCell>
            <TableCell>{ currency.code }</TableCell>
            <TableCell>{ currency.mid }</TableCell>
        </TableRow>
    )
)

export default CurrenciesTableRow