import React from "react";
import Nav from "./Nav";
function Header() {
    return (
        <header className="bg-gray-900 flex flex-row-reverse md:flex-grow lg:flex grow justify-between items-center p-3 opacity-90">
            {/* // <header className="bg-teal-800 flex flex-row lg:flex-col justify-between lg:items-center lg:p-3"> */}
            <Nav />
            <a
                href="/home"
                className="text-white text-base md:text-xl lg:text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-rose-900 "
            >
                FAKEMAL
            </a>
        </header>
    );
}

export default Header;
