import React from 'react'

export default function Card() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg p-6 relative h-64">
                <h2 className="text-lg mb-4">XXXX XXXX XXXX XXXX</h2>
                <p className="text-sm">Deji John</p>
                <div className='flex items-end h-[70%]'>
                    <div>
                    <div className='flex gap-8'>
                        <div className='text-sm'>
                            <h1>Expire</h1>
                            <p>04/28</p>
                        </div>
                        <div className='text-sm'>
                            <h1>CCV</h1>
                            <p>785</p>
                        </div>
                    </div>
                
                <div className="absolute bottom-4 right-4 flex">
                  <span className="bg-red-500 w-12 h-12 rounded-full"></span>
                  <span className="bg-yellow-400 w-12 h-12 rounded-full -ml-4"></span>
                </div>
                    </div>
                </div>
              </div>
  )
}
