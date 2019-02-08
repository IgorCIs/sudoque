import { createStore, combineReducers, applyMiddleware } from 'redux'
import * as reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';


const initialState = {
    game: {
    //     started: false,
    //     paused: false,
    //     startTime: null,
    //     difficulty: '',
        notesInput: false
    },
    cells: ('370680000100074803008100060720040630030802010015060049080006400403720001000018026').split('').map((value, id) => ({
        id,
        selected: false,
        conflict: false,
        value: +value,
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