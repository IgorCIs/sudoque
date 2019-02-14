import { createStore, combineReducers, applyMiddleware } from 'redux'
import * as reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';


const initialState = {
    game: {
        //     paused: false,
        //     startTime: null,
        //     difficulty: '',
        started: false,
        notesInput: false
    },
    cells: Array(81).fill(null).map((value, id) => ({
        id,
        selected: false,
        conflict: false,
        value: value,
        notes: [...Array(9).fill(0)],
        fixed: !!+value,
    }))  
}

const saver = store => next => action => {
    let result = next(action)
    localStorage['super-sudoque'] = JSON.stringify(store.getState())
    return result
}

const store = composeWithDevTools(applyMiddleware(saver))(createStore)(
    combineReducers({ ...reducers }),
    (localStorage['super-sudoque']) ?
        JSON.parse(localStorage['super-sudoque']) :
        initialState
)

localStorage['super-sudoque'] = JSON.stringify(store.getState())
    
export default store