import React, { Component } from 'react'
import './../../styles/InterfaceControlls/NewGame.sass'

const data = {
    Easy: 'DIFFICULTY_EASY',
    Medium: 'DIFFICULTY_MEDIUM',
    Hard: 'DIFFICULTY_HARD',
    Expert: 'DIFFICULTY_EXPERT',
}

const Option = ({ value, onClick=f=>f }) => (
    <li onClick={onClick} className='option'>
        {value}
    </li>
)

class NewGame extends Component {
    constructor(props) {
        super(props)

        
        this.state = {
            opened: false
        }
        this.toggleOpened = this.toggleOpened.bind(this)
    }
    
    toggleOpened() {
        this.setState(state => ({ opened: !state.opened }))
    }

    render() {
        const { opened } = this.state
        
        return (
            <div className='newGame'>
                <div className='button' onClick={this.toggleOpened}> New Game </div>            
                {opened ?
                    <ul className='options'>
                        {Object.keys(data).map((k, i) => (
                        <Option value={k}   
                                    onClick={this.toggleOpened}
                                    key={i}
                            />
                        ))} 
                        <Option value={'cancel'} onClick={this.toggleOpened}/>
                    </ul> : ''
                }
            </div>
        )
    } 
}


export default NewGame
