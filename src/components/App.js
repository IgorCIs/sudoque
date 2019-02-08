import React from 'react'
import './../styles/Game.sass'
import { CellsBoard, InterfaceControlls } from './Containers';

const App = () => (
    <>
        <div className='game'>
            <CellsBoard/>
            <InterfaceControlls/>
        </div>
    </>
)

export default App
