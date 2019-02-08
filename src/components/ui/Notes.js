import React from 'react'
import '../../styles/Notes.sass'

const Note = ({ value }) => (
    <div className='note'>
        { +value ? value : ''}
    </div>
)

const Notes = ({ values }) => {
    return (
        values.some(v => !!v) ?
            <div className='notes'>
                {values.map((value, i) => 
                    <Note value={value} key={i}/>
                )}
            </div> : ''
    )
}

export default Notes