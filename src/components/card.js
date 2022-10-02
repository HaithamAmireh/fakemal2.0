import React from 'react'


function card({ anime_name, anime_poster }) {
    return (
        // <div className="flex flex-col w-57 mx-3 my-8 items-center h-96 bg-orange-400 rounded-xl">
        <div id="anime_card" className="flex flex-col w-40 mx-3 my-8 items-center h-96 bg-orange-400 rounded-xl lg:w-64 md:w-56 hover:bg-orange-300 cursor-pointer">
            <img src={anime_poster} alt="placeholder" className="w-54 rounded-xl h-80 m-2 p-2 lg:p-0 md:w-56 lg:w-60" />
            <div className="text-ellipsis overflow-hidden text-sm text-center">
                <b>{anime_name}</b>
            </div>
        </div>
    )
}

export default card