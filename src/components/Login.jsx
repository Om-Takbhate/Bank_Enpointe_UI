import React, { useRef, useState } from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'

const Login = () => {

    const [isLogin, setIsLogin] = useState(false)

    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const usernameRef = useRef(null)
    const [isRoleBanker,setIsRoleBanker] = useState(false)

    const handleLoginClick = async () => {
            const email = emailRef.current.value
            const password = passwordRef.current.value
            const username = usernameRef.current.value
            const role = isRoleBanker ? "banker" : "customer"


            const res = await axios.post(BASE_URL + "/api/auth/login",{
                email, password, role, username
            }, {withCredentials: true})

            console.log(res)
    }

    return (
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4  mx-auto my-10">
            <legend className="fieldset-legend">{isLogin ? "Sign Up" : "Login"}</legend>

            <label className="label">Username</label>
            <input type="text" ref={usernameRef} className="input light:border-black" placeholder="Username" />
            
            <label className="label">Email</label>
            <input ref={emailRef} type="email" className="input light:border-black" placeholder="Email" />

            <div className="flex">
                <label className="label">Role</label>
                <div className="ml-10 items-center flex gap-4">
                    <label htmlFor="customer">
                        <input type="radio" id="customer" name="role" className="radio mr-2 radio-info" defaultChecked />
                        Customer
                    </label>
                    <label htmlFor="banker">
                        <input type="radio" id="banker" name="role" className="radio mr-2 radio-info" />
                        Banker
                    </label>
                </div>
            </div>


            <label className="label">Password</label>
            <input ref={passwordRef} type="password" className="input" placeholder="Password" />

            <button onClick={handleLoginClick} className="btn btn-neutral mt-4">Login</button>
            <p className='text-center mt-2 hover:cursor-pointer' onClick={(e) => setIsLogin(prev => !prev)}>{!isLogin ? "New to Bank ? Sign up" : "Already have account ? Log in"}</p>
        </fieldset>
    )
}

export default Login