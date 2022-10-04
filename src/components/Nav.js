import React from 'react'
function Nav() {
  const navItems = ["Home", "Seasonal", "Top Anime", "Top Manga", "Pictures", "Search"]
  const navItemsValues = ["/home", "/seasonal", "/topanime", "/topmanga", "/pictures", "/search"]

  return (
    // <div className='flex flex-grow justify-evenly max-w-2xl'>
    // <div className='flex space-x-4 flex-wrap lg:justify-evenly lg:max-w-2xl md:flex-grow md:justify-evenly '>
    <div className='grid grid-cols-1 text-xs lg:justify-evenly lg:max-w-2xl lg:text-lg md:flex md:flex-grow md:justify-evenly'>
      {navItems.map((navItem, i) => {
        return <a key={navItemsValues[i]} href={navItemsValues[i]} className="hover:animate-pulse text-base lg:text-lg hover:text-gray-700">{navItem}</a>
      })}
    </div>
  )
}

export default Nav