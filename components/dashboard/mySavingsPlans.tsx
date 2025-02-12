import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const MySavingsPlans = (plan: {name: string, amount: string}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
        <div>
            <h4 className="font-bold">{plan.name}</h4>
            <p className="text-sm text-gray-500">₦{plan.amount}</p>
        </div>
        <FaArrowRight className="text-gray-400" />
    </div>
  )
}

export default MySavingsPlans;