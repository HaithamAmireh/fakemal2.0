import React from 'react'
function Nav() {
  const navItems = ["Home", "Seasonal", "Top Anime", "Top Manga", "Pictures", "Search"]
  const navItemsValues = ["/", "/seasonal", "/topanime", "/topmanga", "/pictures", "/search"]
  // const navItems = { "Home": "/", "Seasonal": "/seasonal", "Top Anime": "/topanime", "Top Manga": "/topmanga"}
  return (
    // <div className='flex flex-grow justify-evenly max-w-2xl'>
    <div className='flex flex-grow justify-between flex-wrap text-xs lg:justify-evenly lg:max-w-2xl lg:text-lg md:flex-grow md:justify-evenly'>
      {navItems.map((navItem, i) => {
        return <a href={navItemsValues[i]} className="hover:animate-pulse text-sm lg:text-lg">{navItem}</a>
      })}
    </div>
  )
}

export default Nav