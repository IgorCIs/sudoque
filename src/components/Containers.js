import { connect } from 'react-redux'
import Board from './ui/Board';
import { setSelectedCell, onCellSetValue, setCellValue, toggleInputType, setNoteValue, newGame } from '../store/actions';
import Interface from './ui/Interface';

const setValueCell = dispatch => (cell, value, cells, notesInput) => {
    !notesInput ? 
    dispatch(setCellValue(cell.id, value)) :
    dispatch(setNoteValue(cell.id, value))
    dispatch(onCellSetValue(cell, notesInput ? 0 : value, cells))
}

const CellsBoard = connect(
    state =>
        ({
            cells: state.cells,
            notesInput: state.game.notesInput,
            selectedCell: state.cells.find(cell => cell.selected)
        }),
    dispatch => 
    ({
            selectCell(cell) {
                cell && dispatch(setSelectedCell(cell.id, cell.value))
            },
            setCellValue(cell, value, cells, notesInput) {
                setValueCell(dispatch)(cell, value, cells, notesInput)
            },
            toggleInput() {
                dispatch(toggleInputType())
            }
        })
)(Board)

const InterfaceControlls = connect(
    state =>
        ({
            selectedCell: state.cells.find(cell => cell.selected),
            cells: state.cells,
            game: state.game
        }),
    dispatch =>     
        ({
            setCellValue(cell, value, cells, notesInput) {
                setValueCell(dispatch)(cell, value, cells, notesInput)
            },
            toggleInput() {
                dispatch(toggleInputType())
            },
            newGame(difficulty) {
                dispatch(newGame('370680000100074803008100060720040630030802010015060049080006400403720001000018026'.split('').map(v => +v)))
            }
        })
)(Interface)

export {
    CellsBoard,
    InterfaceControlls
}