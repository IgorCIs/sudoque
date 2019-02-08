import React from 'react'
import '../../styles/Cell.sass'
import Notes from './Notes';
import PropTypes from 'prop-types'


const Value = ({ value }) => {
    return ( 
        <div className='value'>
            {+value ? value : ''}
        </div>
    )
}

const Cell = ({ selected, conflict, same, nearby, value, notes, fixed, onClick=f=>f }) => {
    return (
        <div onClick={onClick}
            className={`cell ${selected ? 'selected' : ''}
                        ${nearby ? 'nearby' : ''}
                        ${conflict ? 'conflict' : ''}
                        ${same ? 'same' : ''}
                        ${fixed ? 'fixed' : ''}
            `}>
            {value ? 
                <Value value={value}/>  
                :
                <Notes values={notes}/>
            }
        </div>
    )
}

Cell.propTypes = {
    selected: PropTypes.bool,
    conflict: PropTypes.bool,
    same: PropTypes.bool,
    nearby: PropTypes.bool,
    value: PropTypes.number,
    onClick: PropTypes.func
}

export default Cell
