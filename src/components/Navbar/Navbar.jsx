import React from 'react'
import { SlideTabsExample } from './SlideTab'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between md:px-30 px-10 py-3 '>
            <h1 className='bg-gradient-to-r from-red-500 via-green-500 to-purple-500 text-transparent bg-clip-text text-xl font-bold shadow-amber-500 md:text-4xl'>Deepak Chhantyal</h1>
            <div className='hidden md:block'>
                <SlideTabsExample />
            </div>
            <div className=''>
                contact 
            </div>
        </nav>
    )
}

export default Navbar
