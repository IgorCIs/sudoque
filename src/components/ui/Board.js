import React from 'react'
import './../../styles/Board.sass'
import Cell from './Cell';
import PropTypes from 'prop-types'
import { HotKeys } from 'react-hotkeys'
import { keyMap } from '../../hotkeys';

const Board = ({ cells, selectedCell, notesInput, started, onSolve=f=>f, selectCell=f=>f, setCellValue=f=>f, toggleInput=f=>f }) => {
    const hotkeys = {
        ...Array(11).fill(0).reduce((prev, n, i) => ({
            ...prev,
            [`SET_VALUE_${i - 1}`]: e => setCellValue(selectedCell, i - 1, cells, notesInput)
        })),
        MOVE_LEFT: () => selectCell(cells[selectedCell.id - 1]),
        MOVE_RIGHT: () => selectCell(cells[selectedCell.id + 1]),
        MOVE_BOTTOM: () => selectCell(cells[selectedCell.id + 9]),
        MOVE_TOP: () => selectCell(cells[selectedCell.id - 9]),
        CHANGE_INPUT_TYPE: () => toggleInput(),
    }
    
    cells.every(cell => cell.value && !cell.conflict) && onSolve()

    return (
        <HotKeys className='board' handlers={hotkeys} keyMap={keyMap}>
            {cells.map(cell => (
                <Cell {...cell}
                    onClick={() => started && selectCell(cell)}
                    key={cell.id}
                />
            ))}
        </HotKeys>
    )
}

Board.propTypes = {
    cells: PropTypes.array,
    notesInput: PropTypes.bool,
    selectCell: PropTypes.func,
    setCellValue: PropTypes.func,
    toggleInput: PropTypes.func,
    selectedCell: PropTypes.object,
}

export default Board
