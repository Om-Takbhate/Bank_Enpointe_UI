import React, { useRef, useState } from 'react'

const TransactionForm = () => {


    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const [isRoleBanker,setIsRoleBanker] = useState(false)

    return (
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4  mx-auto my-10  w-[98%] sm:w-xs">
            <legend className="fieldset-legend">Make a transaction</legend>

            <label className="label">Id of reciever</label>
            <input type="number" className="input light:border-black" placeholder="Id of reciever" />
            
            <label className="label">Amount</label>
            <input type="number" className="input light:border-black" placeholder="Amount" />


            <label className="label">Confirm Password</label>
            <input type="password" className="input" placeholder="Password" />

            <button className="btn btn-neutral mt-4">Proceed</button>
        </fieldset>
    )
}

export default TransactionForm