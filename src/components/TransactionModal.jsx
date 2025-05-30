import React from 'react'
import TransactionForm from './TransactionForm'

const TransactionModal = () => {
    return (
        <>
            
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box ml-6">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">You are making a Transaction</h3>
                    <p className="py-4">Press ESC key or click on ✕ button to close</p>
                    <TransactionForm />
                </div>
            </dialog>
        </>
    )
}

export default TransactionModal