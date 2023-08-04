import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from "../components/Spinner"

const LoginView = () => {
    const navigator = useNavigate()

    const setUsername = (username) => localStorage.setItem('username', username)
    const getUsername = () => localStorage.getItem('username')

    const [usernameError, setUsernameError] = useState(false)
    const [usernameInput, setUsernameInput] = useState('')
    const [username] = useState(getUsername())

    const inputClass = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
    const inputClassError = inputClass + ' border-red-500'

    const handleLogin = () => {
        if (!usernameInput) {
            setUsernameError(true)
            return
        }

        setUsername(usernameInput)
        navigator('/')
    }

    const handleCancel = () =>  navigator('/')

    useEffect(() => {
        setUsernameInput(getUsername() ?? '')
    }, [])

    return (
        <div className="w-screen h-screen">
            <div className='h-full flex justify-center items-center'>
                <div className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">
                    <div className='my-5'>
                        <h1 className='text-xl text-gray-700 font-bold'>Login</h1>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            className={usernameError ? inputClassError : inputClass}
                            placeholder=""
                            value={usernameInput}
                            onChange={(e) => setUsernameInput(e.target.value)}
                        />
                        {usernameError && <p className="text-red-500 text-xs italic">Please set an username !Don't be shy!</p>}
                    </div>
                    <div className="flex items-center justify-between">
                        {(username) && (
                            <button
                                type='button'
                                className="inline-block align-baseline font-bold text-sm text-emerald-500 hover:text-emerald-800"
                                onClick={() => handleCancel()}
                            >
                                Cancel
                            </button>
                        )}
                        <button
                            type="button"
                            className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-auto"
                            onClick={handleLogin}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginView
