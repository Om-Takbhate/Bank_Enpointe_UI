import React from 'react'
import TransactionModal from './TransactionModal'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="hero bg-base-200 min-h-[91%]">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-xl sm:text-5xl font-bold">Welcome to Enpoint IO Bank 🏦</h1>
                    <p className="py-6">Deposit, Withdraw, and Track Every Rupee — All in One Place.
                    </p>
                    <div className='flex  gap-2 flex-col sm:flex-row justify-center'>
                        <Link to="/login" className="btn btn-dash btn-primary">Login</Link>
                        <button className="btn btn-dash btn-primary">View History</button>
                        <button className="btn btn-dash btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()}> Make a Transaction</button >
                    </div>
                    <TransactionModal />
                </div>
            </div>
        </div>
    )
}

export default Hero