const keyMap = {
    MOVE_LEFT: 'left',
    MOVE_RIGHT: 'right',
    MOVE_BOTTOM: 'down',
    MOVE_TOP: 'up',
    CHANGE_INPUT_TYPE: 'n',
    UNDO: 'backspace',

    ...Array(11).fill(0).reduce((prev, n, i) => ({
        ...prev ,[`SET_VALUE_${i - 1}`]: i - 1 + ''
    })) 
}

export {
    keyMap
}   