import React, { Component } from 'react'
import './../../styles/InterfaceControlls/NewGame.sass'

const data = {
    Easy: 'easy',
    Medium: 'medium',
    Hard: 'hard',
    Expert: 'expert',
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

    startNewGame(difficulty) {
        return () => {
            this.props.newGame(difficulty)
            this.toggleOpened()
        }
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
                                    onClick={this.startNewGame(data[k])}
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
