import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <div>
            <h1> 
            <Link to="/login"> Login</Link>
            </h1>
            <br />
            <h1>
                <Link to="/signup"> SignUp</Link>
            </h1>
        </div>
    </div>
  )
}

export default Home