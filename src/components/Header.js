import React from 'react'
import Nav from './Nav'
function Header() {
    return (
        <header className="bg-orange-400 flex sm:flex-row justify-between items-center p-3 opacity-90">
        {/* // <header className="bg-teal-800 flex flex-row lg:flex-col justify-between lg:items-center lg:p-3"> */}
            <Nav />
            <a href="/home" className="text-white text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-gray-700 ">
                FAKEMAL
            </a>
        </header>
    )
}

export default Header