import React from "react";
function Nav() {
    const navItems = ["Home", "Seasonal", "Anime", "Manga", "Character", "Search"];
    const navItemsValues = [
        "/home",
        "/seasonal",
        "/topanime",
        "/topmanga",
        "/characters",
        "/search",
    ];

    return (
        <div className="flex text-xs space-x-3 lg:space-x-2 lg:justify-evenly lg:max-w-2xl lg:text-lg md:flex md:flex-grow md:justify-evenly first:ml-2 overflow-x-scroll md:overflow-hidden lg:overflow-hidden">
            {navItems.map((navItem, i) => {
                return (
                    <a
                        key={navItemsValues[i]}
                        href={navItemsValues[i]}
                        className="hover:animate-pulse text-base lg:text-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 hover:text-rose-900"
                    >
                        {navItem}
                    </a>
                );
            })}
        </div>
    );
}

export default Nav;
