import React from 'react'

function Navbar() {
    return (
        <>
            <div className='h-18'>
                <div className='flex justify-between h-18 w-2/3 mx-auto items-center'>
                    <div className='flex items-center px-3'>
                        <h3 className='bg-purple-500 font-medium text-white px-5 py-3 rounded-full text-2xl mr-3'>A</h3>
                        <h3 className='text-gray-900 text-2xl font-bold'>Anas</h3>
                    </div>
                    <div className='w-2/4'>
                        <ul className='flex justify-around items-center text-gray-900 text-lg'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Protfolio</li>
                            <li>Services</li>
                            <li className='px-5 py-2 bg-purple-500 text-white rounded-md'>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar