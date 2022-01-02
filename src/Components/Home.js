import React from 'react'
import {NavLink} from 'react-router-dom'


function Home() {
    return (
        <div>
            <h1>Begin Test</h1>
            <NavLink to='/test' >Start the test</NavLink>
        </div>
    )
}

export default Home
