import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {useState} from 'react';


const Home = (props) => {
  const { loggedIn, email } = props
  const navigate = useNavigate()
  const onButtonClick = () => {
    // You'll update this function later
  }

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>Welcome!</div>
        {/* <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form> */}
      </div>
      <div>This is the home page :D</div>
      {/* <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={onButtonClick}
        
          value={loggedIn ? 'Log out' : 'Miu'}
        /> */}
        <Link to="/login"> 
            <button>Login</button>
        </Link>
        {/* {loggedIn ? <div>Your email address is {email}</div> : <div />} */}
      </div>
      
    // </div>
  )
}

export default Home