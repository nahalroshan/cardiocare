import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'
import { doSignOut } from '../../dbconfig/auth'

const Header = () => {
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth()
    return (
        <nav className='flex justify-between items-center gap-x-2 w-full z-20 fixed top-0 left-0 h-12 bg-gradient-to-r from-white to-sky-300'>
            {
                userLoggedIn
                    ?
                    <>
                    <div className='ml-auto mr-8 border border-gray-700 rounded-lg p-2 '> 

                    <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='text-sm text-blue-600 underline'>Logout</button>
                    </div>
                        

                    </>
                    :
                    <>
                       
                    </>
            }

        </nav>
    )
}

export default Header