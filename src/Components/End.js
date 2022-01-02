import React ,{useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {ScoreContext} from './ScoreContext'

function End() {
    const {score,handleScore}=useContext(ScoreContext);

    return (
        <div>
            <h1>Your score {score}</h1>
            <button onClick={()=>{handleScore()}}>Score</button>
            <NavLink  to='/' >Retry</NavLink>
        </div>
    )
}

export default End
