import { connect } from 'react-redux'
import Board from './ui/Board'
import { setSelectedCell, onCellSetValue, setCellValue, toggleInputType, setNoteValue, newGame, onSolve } from '../store/actions'
import Interface from './ui/Interface'
import boards from '../libs/boards';

const setValueCell = dispatch => (selected, value, cells, notesInput) => {
    if(selected) {
        !notesInput  ? 
        dispatch(setCellValue(selected.id, value)) :
        dispatch(setNoteValue(selected.id, value))
        dispatch(onCellSetValue(selected, notesInput ? 0 : value, cells))
    }
}

const CellsBoard = connect(
    state =>
        ({
            cells: state.cells,
            notesInput: state.game.notesInput,
            started: state.game.started,
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
            },
            onSolve() {
                dispatch(onSolve())
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
                const board = boards[difficulty]
                const scheme = board[Math.floor(Math.random() * board.length)]
                                .split('')
                                .map(item => +item)

                dispatch(newGame(scheme))
            }
        })
)(Interface)

export {
    CellsBoard,
    InterfaceControlls
}