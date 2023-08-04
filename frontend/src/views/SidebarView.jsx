import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context'
import {FiLogOut} from 'react-icons/fi'
import {CgProfile} from 'react-icons/cg'

const SidebarView = () => {
    const navigator = useNavigate()
    const {username} = useContext(UserContext)

    return (
        <div className="h-full w-1/4 bg-emerald-400 shadow-xl p-3 py-5">
            <div className='flex items-center pb-5 mx-2 border border-0 border-b-2'>
                <CgProfile className='text-white text-3xl'/>
                <h1 className='text-white text-xl font-bold ml-2'>{username}</h1>
                <button
                    className='text-white text-3xl rounded px-1 ml-auto hover:text-red-500'
                    onClick={() => navigator('/login')}
                >
                    <FiLogOut /> 
                </button>
            </div>
        </div>
    )
}

export default SidebarView
