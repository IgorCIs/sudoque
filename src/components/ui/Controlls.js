import React from 'react'
import './../../styles/InterfaceControlls/Togglers.sass'


const Toggler = ({ type, text, onClick }) => (
    <div onClick={onClick} className={`toggler ${type}`}>
        <div className="logo"></div>
        <div className="text"> {text} </div>

    </div>
)

const Controlls = ({ clearClick=f=>f, notesClick=f=>f, notesInput}) => {
    const buttons = [
        {
            text: 'Notes',
            type: `notes ${notesInput ? 'active' : ''}`,
            cb: notesClick
        },
        {
            text: 'Tip',
            type: 'tip',
            cb: f=>f
        },
        {
            text: 'Undo',
            type: 'undo',
            cb: f=>f
        },
        {
            text: 'Clear',
            type: 'clear',
            cb: clearClick 
        },
    ]

    return (
        <div className='controlls'>
            {Object.keys(buttons).map((button, i) => (
                <Toggler type={buttons[button].type}
                        key={i}
                        text={buttons[button].text}
                        onClick={buttons[button].cb}
                />
            ))
            }        
        </div>
    )
}

export default Controlls
