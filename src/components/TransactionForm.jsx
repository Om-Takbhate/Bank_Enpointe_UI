import React, { useRef, useState } from 'react'

const TransactionForm = () => {

    const [isLogin, setIsLogin] = useState(false)

    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const [isRoleBanker,setIsRoleBanker] = useState(false)

    return (
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4  mx-auto my-10">
            <legend className="fieldset-legend">{isLogin ? "Sign Up" : "Login"}</legend>

            <label className="label">Email</label>
            <input type="email" className="input light:border-black" placeholder="Email" />

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
            <input type="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4">Login</button>
            <p className='text-center mt-2 hover:cursor-pointer' onClick={(e) => setIsLogin(prev => !prev)}>{!isLogin ? "New to Bank ? Sign up" : "Already have account ? Log in"}</p>
        </fieldset>
    )
}

export default TransactionForm