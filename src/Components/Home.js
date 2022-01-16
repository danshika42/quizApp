import React, { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import {ScoreContext} from './ScoreContext'



function Home() {
    const {handleName,name}=useContext(ScoreContext);
    return (
        <div className='Home'>
            <h1  className='Home-heading2'>Hola! {name!==''?name:'User'}</h1>
            <input  className='Home-input' type='text' 
                    placeholder='Enter your name'
                    value={name}
                    onChange={(e)=>handleName(e.target.value)} /><br/>
            <NavLink accessKey='s'  className='Home-start' to='test' >Start</NavLink>
        </div>
    )
}

export default Home
         