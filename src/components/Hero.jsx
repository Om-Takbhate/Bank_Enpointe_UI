import React from 'react'
import TransactionModal from './TransactionModal'

const Hero = () => {
    return (
        <div className="hero bg-base-200 min-h-[91%]">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <p className="py-6">Deposit, Withdraw, and Track Every Rupee — All in One Place.
                    </p>
                    <div className='flex gap-2 justify-center'>
                        <button className="btn btn-dash btn-primary">View History</button>
                        <button button className="btn btn-dash btn-primary" onClick={() => document.getElementById('my_modal_3').showModal()}> Make a Transaction</button >
                        <TransactionModal />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero