import React from 'react'
import Nav from './Nav'
function Header() {
    return (
        <header className="bg-orange-400 flex sm:flex-row justify-between items-center p-3 opacity-90">
        {/* // <header className="bg-teal-800 flex flex-row lg:flex-col justify-between lg:items-center lg:p-3"> */}
            <Nav />
            <p className="text-white text-2xl">
                FAKEMAL
            </p>
        </header>
    )
}

export default Header