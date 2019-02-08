import React from 'react'
import '././../../styles/InterfaceControlls/Numpad.sass'

const Button = ({ onClick=f=>f, id }) => (
    <div onClick={onClick} className='item'>
        {id}
    </div>
)

const Numpad = ({ onClick=f=>f }) => {
    return (
        <div className='numpad'>
            {[...Array(9)].map((item, i) => (
                <Button key={i}
                        id={i + 1}
                        onClick={() => onClick(i + 1)}
                ></Button>
            ))}
        </div>
    )
}

export default Numpad


