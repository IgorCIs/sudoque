import c from "./constans";

const setCellValue = (id, value) =>
    ({
        type: c.SET_CELL_VALUE,
        id,
        value
    })

const onCellSetValue = (cell, value, cells) => 
    ({
        type: c.ON_SET_VALUE,
        cell,
        value,
        cells
    })

const setSelectedCell = (id, value) =>
    ({
        type: c.SET_CELL_SELECTED,
        id,
        value
    })

const toggleInputType = () => 
    ({
        type: c.TOGGLE_INPUT_MODE
    })

const setNoteValue = (id, value) => 
    ({
        type: c.SET_NOTE_VALUE,
        id,
        value 
    })

export {
    setCellValue,
    setSelectedCell,
    onCellSetValue,
    toggleInputType,
    setNoteValue
}