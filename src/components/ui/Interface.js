
import React from 'react'
import NewGame from './NewGame';
import Numpad from './Numpad';
import Controlls from './Controlls';
import './../../styles/InterfaceControlls/InterfaceControlls.sass'

const Interface = ({ selectedCell, cells, game, toggleInput=f=>f, setCellValue=f=>f }) => {
    return (
        <div className='interfaceControlls'>
            <NewGame/>
            <Numpad onClick={value => selectedCell && setCellValue(selectedCell, value, cells, game.notesInput)}/>
            <Controlls 
                    clearClick={() => selectedCell && setCellValue(selectedCell, 0, cells, game.notesInput)}
                    notesClick={toggleInput}
                    {...game}
            />
        </div>
    )
}

export default Interface
