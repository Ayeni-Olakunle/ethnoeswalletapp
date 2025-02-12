"use client"

import React, { useState } from 'react'
import { FaBell } from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline  } from "react-icons/io5";
import { getBalanceFn } from '@/services/query';

export default function DashboardHeader() {
  const [toggle, setToggle] = useState<boolean>(false);
  const { data } = getBalanceFn();
  

  const toggleSwicth = () => {
    setToggle(!toggle)
  }
  return (
    <div className="flex justify-between items-center mb-6">
        <div className='flex justify-start space-x-4'>
        <div className="">
        <p>Total Balance</p>
        <h1 className="text-2xl font-bold">{toggle ? `₦${data?.data.amount.toLocaleString("en-US")}` : "XXXXXX"}</h1>
        </div>
        {toggle ? <IoEyeOutline className="text-gray-500 cursor-pointer" onClick={toggleSwicth} /> : <IoEyeOffOutline className="text-gray-500 cursor-pointer" onClick={toggleSwicth} />}
        </div>
          <FaBell className="text-gray-500" />
      </div>
  )
}
