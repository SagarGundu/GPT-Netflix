import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const[isSignInForm,setSignInForm] = useState(true);

 const toggleSignInForm = () =>{
    setSignInForm(!isSignInForm);
  }
  return (
    <div>
      <Header/>
      <div className="absolute">
        <img className="bg-auto w-400"
        src ="https://i.pinimg.com/1200x/19/8b/2f/198b2f01e73b905772279616eccc7c65.jpg"
        alt= "bg-image"/>
      </div>
      <form className='w-3/12 absolute p-12 bg-black/80 my-36 mx-auto right-0 left-0 text-white rounded-lg'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
          <input 
        type="text"
        placeholder='Full Name'
        className='p-2 my-2 w-full bg-gray-700 bg-opacity-50'
        />
        )}
         {!isSignInForm && (
          <input 
        type="text"
        placeholder='Mobile Number'
        className='p-2 my-2 w-full bg-gray-700 bg-opacity-50'
        />
        )}
        <input 
        type="text"
        placeholder='email address'
        className='p-2 my-2 w-full bg-gray-700 bg-opacity-50'
        />
        <input
        type="text"
        placeholder='password'
        className='p-2 my-2 w-full bg-gray-700'
        />
        <button className='p-4 my-4 py-3 bg-red-700 w-full'> {isSignInForm ? "Sign In" : "Sign Up"}

        </button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
          {isSignInForm ? "New to Netflix? Sign Up" : "Already registered Sign In"}
          </p>
        
      </form>
    </div>
  )
}

export default Login
