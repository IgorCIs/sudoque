/* eslint-disable no-fallthrough */
import c from "./constans";
import { isNearby, getNearbyCells } from "../libs/XY";
import { replaceItems } from "../libs/arrayHelpers";

const game = (state = {}, action) => {
    switch(action.type) {
        case c.TOGGLE_INPUT_MODE:
            return {
                ...state,
                notesInput: !state.notesInput   
            }
        
        case c.NEW_GAME:
            return {
                ...state,
                started: true
            }            
            
        default: 
            return state
    }
}

const cell = (state = {}, action) => {
    switch(action.type) {
        case c.SET_CELL_VALUE:
            return (action.id !== state.id) || !state.selected || state.fixed ? 
                state :
                {
                    ...state,
                    value: action.value,
                    notes: Array(9).fill(0)
                }

        case c.SET_CELL_SELECTED:
            return {
                ...state,
                selected: action.id === state.id,
                nearby: isNearby(action.id, state.id),
                same: !isNearby(action.id, state.id) && !!action.value && action.value === state.value
            }
        //im sorry
        case c.ON_SET_VALUE:
            return {
                ...state,
                same: (!!action.value && state.value === action.value && 
                        !isNearby(action.cell.id, state.id) && (!action.cell.fixed))
                        || (action.cell.fixed && action.cell.value === state.value),
                        
                notes: action.cell.fixed ? 
                        state.notes :
                        replaceItems(state.notes, state.notes.indexOf(action.value), 0),

                conflict: !action.cell.fixed ? getNearbyCells(state, action.cells).some(c => {
                    const valueToCompare = c.id === action.cell.id ? !action.cell.fixed && action.value : c.value
                    return state.value === valueToCompare && !!valueToCompare
                }) : state.conflict
            }

        case c.SET_NOTE_VALUE: 
            return action.id !== state.id || state.fixed ?
                state :
                {
                    ...state,
                    value: 0,
                    notes: action.value ?
                        replaceItems(state.notes, action.value - 1, !!~state.notes.indexOf(action.value) ? 0 : action.value) :
                        Array(state.notes.length).fill(0)
                }

        case c.ON_SOLVE:
        case c.NEW_GAME: 
            return {
                ...state,
                value: action.scheme[state.id],
                notes: [...Array(9)].fill(0),
                selected: false,
                conflict: false,
                same: false,
                nearby: false,
                fixed: !!action.scheme[state.id]
            }
        
        default: 
            return state
    }
}

const cells = (state = [], action) => {
    switch(action.type) {
        case c.SET_CELL_VALUE:
        case c.SET_CELL_SELECTED:
        case c.ON_SET_VALUE:
        case c.NEW_GAME:
        case c.SET_NOTE_VALUE:
        case c.ON_SOLVE:
            return state.map(c => cell(c, action))

        default: 
            return state
    }
}

export {
    cells,
    game
}